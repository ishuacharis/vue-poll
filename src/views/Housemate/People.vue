<template>
  <div class="project" v-color="green">
    <MyVote
      :totalVotes= "totalvotes"
      :remainingVotes= "remainingvotes"/>
    <div class="content">
      <div class="center">
        <div class="avatar">
          <img :src="require(`@/assets/${user.avatar}`)" alt="">
        </div>
        <div class="name">
          {{user.screen_name}}
        </div>
        <div class="controls">
          <div class="control" @click="onVoteIncre">
            <span>+</span>
          </div>
          <div class="control">
            <input type="text" :value="user.voteCount" disabled  />
          </div>
          <div class="control" @click="onVoteDecre">
            <span>-</span>
          </div>
        </div>
        <div class="buttons">
          <router-link class="btn btn-primary" :to="{name: 'Housemates'}">Back</router-link>
          <button type="submit" class="btn btn-primary" @click="submit">Cast Vote</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {ref, computed} from 'vue';
  import { useStore } from 'vuex';
  import {useRoute, useRouter} from 'vue-router';
  import {getUser} from '@/data/data';
  import { onVoteIncrement, onVoteDecrement } from '@/store/vote/actions/action_creators';
  import routes from '@/routes';
  import { getToken , getUserId} from '@/helpers';
  import MyVote from '@/components/MyVote/MyVote.vue';

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
      const {params : {screen_name}} = useRoute()
      const user = ref(await getUser(screen_name))
      console.log(user)
      const token  = getToken()
      const userId  = getUserId()
      const onVoteIncre = () => {
        store.dispatch(onVoteIncrement(user.value))
      }
      const onVoteDecre = ()  => {
        store.dispatch(onVoteDecrement(user.value))
      }

      const submit  = async () => {
        const data = {
          user_id: userId,
          housemate_id: 2,
          platform_id: 1,
          amount: 50,
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
            router.replace("/")
          }
        } catch (e) {
          console.error({
            error: e.message
          });
        }
      }

      
      return  {
        user,
        totalvotes: computed(() => store.getters['votes/totalVotes']),
        remainingvotes: computed(() => store.getters['votes/remainingVotes']),
        onVoteIncre,
        onVoteDecre,
        submit
      }
    }
  }
</script>

<style lang="css" scoped src="./Housemate.css"></style>
