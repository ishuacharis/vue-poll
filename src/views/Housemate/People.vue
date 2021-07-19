<template>
  <div class="project">
    <div class="housemate">

      <MyVote
        :totalVotes= "totalvotes"
        :remainingVotes= "remainingvotes"/>
      <div class="content">
        <div class="center">
          <div class="avatar">
            <img :src="require(`@/assets/${housemate.avatar}`)" alt="">
          </div>
          <div class="name">
            {{housemate.screen_name}}
          </div>
          <div class="controls">
            <div class="control" @click="onVoteIncre">
              <span>+</span>
            </div>
            <div class="control">
              <input type="text" :value= housemate.voteCount disabled  />
            </div>
            <div class="control" @click="onVoteDecre">
              <span>-</span>
            </div>
          </div>
          <div class="buttons">
            <router-link class="btn btn-primary" :to="{name: 'Housemates'}">Back</router-link>
            <button type="submit" class="btn btn-primary" @click="submit" v-if="!loading">Cast Vote</button>
            <div v-if="loading" class="loading"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {ref, computed,} from 'vue';
  import { useStore } from 'vuex';
  import {useRoute, useRouter} from 'vue-router';
   
  import { getToken , info} from '@/helpers';
  import MyVote from '@/components/MyVote/MyVote.vue';
  import { setUserRemainingVotes, setUserVotesLeft, updateHouseMatesVote } from '../../store/vote/actions/action_creators';

  export default {
    name: 'People',
    //inject: ['VoteContext'],
    components: {
      MyVote
    },
     async setup() { 
      
      const store = useStore();
      const router  = useRouter();
      const totalvotes =  computed(() => store.getters["votes/totalVotes"]).value;
      const loading  = computed(() => store.getters.loading)
      const votesLeft =  computed(() => store.getters["votes/votesLeft"]);

      // onBeforeUnmount(() => {
      //   alert("Are you want to leave")
      // })

      const getUser = async (user) => {
        const housemates =  computed(() => store.getters["votes/houseMates"]).value;
       
        return housemates.find(housemate => housemate.screen_name === user)
      }

      const {params : {screen_name}} = useRoute()
      const housemate = ref(await getUser(screen_name))

      housemate.value.voteCount ??= 0

      const token  = getToken()
      const { id }  = info()

      const onVoteIncre = () => {
      
        if(votesLeft.value > 0 && votesLeft.value <= totalvotes){ 

          housemate.value.voteCount += 10
          store.dispatch(setUserRemainingVotes('increase'))
          store.dispatch(setUserVotesLeft(housemate))

        }
      }
      const onVoteDecre = ()  => {
        if(housemate.value.voteCount > 0) {

          housemate.value.voteCount -= 10
          store.dispatch(setUserRemainingVotes('decrease'))
          store.dispatch(setUserVotesLeft(housemate))

        }

      }

      const submit  = async () => {
        const data = {
          user_id: id,
          housemate_id: housemate.value.id,
          platform_id: 1,
          amount:  housemate.value.voteCount,
        };
        const args = {
          endPoint: "/vote",
          method: "POST",
          body: data,
          token: token
        };
        await store.dispatch(updateHouseMatesVote(args,))
        if(!loading.value) {
          router.replace("/")
        }
      }
      
      return  {
        housemate,
        totalvotes,
        remainingvotes: computed(() => store.getters['votes/remainingVotes']),
        onVoteIncre,
        onVoteDecre,
        loading,
        submit
      }
    }
  }
</script>

<style lang="css" scoped src="./Housemate.css"></style>
