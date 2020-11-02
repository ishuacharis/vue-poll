<template lang="html">
  <div class="" v-if="error">
    Error component
  </div>
  <Suspense v-else>
    <template #default>
      <Photos />
    </template>
    <template #fallback>
        <div class="">
          Loading....
        </div>
    </template>
  </Suspense>
</template>

<script>
  import {ref, onErrorCaptured} from 'vue'
  import Photos from './Photos.vue'
  export default{
    name: 'Gallery',
    components: {
      Photos
    },

    setup() {
      const error =  ref(null)
      onErrorCaptured( e => {
        error.value = e
        console.log(`This is an error of ${e}`)
      })

      return {error}
    }
  }

</script>
<style  src="./Gallery.css">

</style>
