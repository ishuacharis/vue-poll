<template>
  <div class="project" v-color="green">
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
            <input type="text" :value="voteCount" disabled  />
          </div>
          <div class="control" @click="onVoteDecre">
            <span>-</span>
          </div>
        </div>
        <div class="buttons">
          <router-link class="btn btn-primary" :to="{name: 'Housemates'}">Back</router-link>
          <button type="submit" class="btn btn-primary" @click="submit" v-if="!isLoading">Cast Vote</button>
          <div v-if="isLoading" class="loading"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {ref, computed, onBeforeUnmount} from 'vue';
  import { useStore } from 'vuex';
  import {useRoute, useRouter} from 'vue-router';
  import {getUser} from '@/data/data';
  //import { onVoteIncrement, onVoteDecrement } from '@/store/vote/actions/action_creators';
  import routes from '@/routes';
  import { getToken , getUserId} from '@/helpers';
  import MyVote from '@/components/MyVote/MyVote.vue';
  import { setUserRemainingVotes, setUserVotesLeft } from '../../store/vote/actions/action_creators';

  export default {
    name: 'People',
    inject: ['VoteContext'],
    components: {
      MyVote
    },
     async setup() { 
      const store = useStore();
      const router  = useRouter();
      const { vote } = routes();

      onBeforeUnmount(() => {
        alert("Are you want to leave")
      })

      const {params : {screen_name}} = useRoute()
      const housemate = ref(await getUser(screen_name))
      const isLoading  = ref(false)
      
      const voteCount =  ref(0)
      const token  = getToken()
      const userId  = getUserId()

      const onVoteIncre = () => {
        if(store.state.votes.votesLeft > 0 && store.state.votes.votesLeft <= 100){ 

          voteCount.value += 10;
          store.dispatch(setUserRemainingVotes('increase'))
          store.dispatch(setUserVotesLeft('increase'))

        }
        //store.dispatch(onVoteIncrement(user.value))
      }
      const onVoteDecre = ()  => {
        if(store.state.votes.votesLeft >= 0 && store.state.votes.votesLeft < 100) {
          
          voteCount.value -= 10;
          store.dispatch(setUserRemainingVotes('decrease'))
          store.dispatch(setUserVotesLeft('decrease'))
        }
        //store.dispatch(onVoteDecrement(user.value))
      }

           

      const submit  = async () => {
        isLoading.value = true
        const data = {
          user_id: userId,
          housemate_id: housemate.value.id,
          platform_id: 1,
          amount: voteCount.value,
        };
        const args = {
          endPoint: "/vote",
          method: "POST",
          body: data,
          token: token
        };

        try {
          const response  =  await vote(args);
          if ("response" in  response) {
              isLoading.value = false
              router.replace("/")
          }
        } catch (e) {
          isLoading.value = false
          console.error({
            error: e.message
          });
        }
      }

      
      return  {
        housemate,
        totalvotes: computed(() => store.getters['votes/totalVotes']),
        remainingvotes: computed(() => store.getters['votes/remainingVotes']),
        onVoteIncre,
        onVoteDecre,
        voteCount,
        isLoading,
        submit
      }
    }
  }
</script>

<style lang="css" scoped src="./Housemate.css"></style>
