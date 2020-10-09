<template>
  <div class="container">
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
            <input type="text" value="0" disabled  />
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
  import {ref, watchEffect,onMounted} from 'vue'
  import {useRoute, useRouter} from 'vue-router'
  import {getUser} from '@/data/data'
  import VoteContext from '@/Context/VoteContext.js'
  import MyVote from '@/components/MyVote/MyVote.vue'
  export default {
    name: 'Housemate',
    components: {
      MyVote
    },
     setup() {
       window.route = useRoute()
       window.router = useRouter()
      const {params : {screen_name}} = useRoute()
      const user = ref(getUser(screen_name))
      const {
        totalvotes, remainingvotes,
        onVoteIncrement,
        onVoteDecrement
      } = VoteContext()

      const onVoteIncre = () => {
        onVoteIncrement(user)
      }
      const onVoteDecre = ()  => {
        onVoteDecrement(user)
      }

      onMounted( () => {
        console.log(screen_name)
      })
      watchEffect(() => screen_name, () =>{
        console.log(screen_name)
      })

      return  {
        user,
        totalvotes,
        remainingvotes,
        onVoteIncre,
        onVoteDecre
      }
    }
  }
</script>

<style lang="css" scoped src="./Housemate.css"></style>
