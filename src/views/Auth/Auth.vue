<template lang="html">
  <div class="container">
    <template v-if="a === 'login' ">
      <Login @change-route="changeRoute" />
    </template>
    <template v-else>
      <Register @change-route="changeRoute"/>
    </template>
    
  </div>
</template> 

<script>
  import {watch, computed, onMounted} from 'vue'
  import {useRoute, useRouter, } from 'vue-router'
  import Login from './Login.vue'
  import Register from './Register.vue'

    
  export default {
    name: 'Auth',
    components : {
      Login, Register
    },
    setup() {
      const router = useRouter()
      window.route = useRoute()
      const route  =  useRoute()
    
      //const {query: {a}} = useRoute()
      const a  = computed(() => route.query.a)

      onMounted(() => {
        router.push({
          path: '/auth',
          query: {a: 'login'}
        })
      })
      watch(a, function(newQuery, oldQuery) {
        console.log(`old query is ${oldQuery} and new query is ${newQuery}`)
      })

      function changeRoute(newRoute) {
        console.log(newRoute)
        router.push({path: '/auth', query: {a: newRoute}})
      }

      return {
        a,changeRoute
      }

    }

  }
</script>

<style lang="css" scoped>
  @import 'Auth.css'
</style>
