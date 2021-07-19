<template lang="html">
  <div class="error" v-if="error">
    Error will apply here
  </div>
  <slot v-else></slot>
</template>

<script>
import {ref,onErrorCaptured} from 'vue'
export default {
  name: 'ErrorBoundary',

  setup() {
    const error = ref(false)

    onErrorCaptured((e) => {
      console.log(e)
      error.value = true
    })

    return {error}
  }
}
</script>

<style lang="css" scoped>
</style>
