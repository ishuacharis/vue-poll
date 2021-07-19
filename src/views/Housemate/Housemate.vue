<template>
  <div class="container">
      <div v-if="error">
        {{ error }}
      </div>
    <Suspense v-else>
      <template #default>
          <People />
      </template>
      <template #fallback>
        <div class="loading-container">
          <div class="loading"></div>
        </div>
      </template>
    </Suspense>
  </div>
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
         error,
       }
     }
  }
</script>

<style lang="css" scoped src="./Housemate.css"></style>
