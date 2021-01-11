<template>
  <div class="project" v-color="green">
    <MyVote
      :totalVotes= "totalvotes"
      :remainingVotes= "remainingvotes"/>
    <div class="content">
      <div class="center">
        <div class="avatar">
          <img :src="user.avatar" alt="">
        </div>
        <div class="name">
          {{user.name}}
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
        <router-link class="btn btn-primary" :to="{name: 'Housemates'}">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {ref, computed} from 'vue';
  import { useStore } from 'vuex';
  import {useRoute, useRouter} from 'vue-router';
  import {getUser} from '@/data/data';

  import MyVote from '@/components/MyVote/MyVote.vue';
  export default {
    name: 'People',
    inject: ['VoteContext'],
    components: {
      MyVote
    },
     async setup() { 
      const store = useStore();
      window.route = useRoute()
      window.router = useRouter()
      const {params : {screen_name}} = useRoute()
      const user = ref(await getUser(screen_name))

      const onVoteIncre = () => {
        store.dispatch({
          type: 'votes/onVoteIncrement',
          housemate: user.value
        })
      }
      const onVoteDecre = ()  => {
        store.dispatch({
          type: 'votes/onVoteDecrement',
          housemate: user.value
        })
      }

      
      return  {
        user,
        totalvotes: computed(() => store.getters['votes/totalVotes']),
        remainingvotes: computed(() => store.getters['votes/remainingVotes']),
        onVoteIncre,
        onVoteDecre,
      }
    }
  }
</script>

<style lang="css" scoped src="./Housemate.css"></style>
