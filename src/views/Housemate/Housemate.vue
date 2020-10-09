<template>
  <div class="container">
    <div class="content">
      <div class="center">
        <div class="avatar">
          <img :src="user.avatar" alt="">
        </div>
        <div class="name">
          {{user.name}}
        </div>
        <div class="controls">
          <div class="control">
            <span>+</span>
          </div>
          <div class="control">
            <input type="text" value="0" disabled  />
          </div>
          <div class="control">
            <span>-</span>
          </div>
        </div>
        <router-link class="btn btn-primary" :to="{name: 'Housemates'}">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { watchEffect,onMounted} from 'vue'
  import {useRoute, useRouter} from 'vue-router'
  import {getUser} from '../../data/data'
  export default {
    name: 'Housemate',

     setup() {
       window.route = useRoute()
       window.router = useRouter()
      const {params : {screen_name}} = useRoute()
      const user =   getUser(screen_name)
      onMounted( () => {
        console.log(screen_name)
      })
      watchEffect(() => screen_name, () =>{
        console.log(screen_name)
      })

      return  {
        user
      }
    }
  }
</script>

<style lang="css" scoped src="./Housemate.css"></style>
