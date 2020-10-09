<template>
  <div v-if="error" class="">
    Error Component
  </div>
  <Suspense v-else>
    <template #default>
      <div class="container">
        <People />
      </div>
    </template>
    <template #fallback>
      <div class="">
        Loading.....
      </div>
    </template>
  </Suspense>
</template>

<script>
  import {ref, onErrorCaptured} from 'vue'
  import People from './People.vue'
  export default {
    name: 'Housemate',
    components: {
      People
    },
     setup() {
       const error =  ref(null)
       onErrorCaptured(e => {
         error.value = e
       })
       return {
         error
       }
     }
  }
</script>

<style lang="css" scoped src="./Housemate.css"></style>
