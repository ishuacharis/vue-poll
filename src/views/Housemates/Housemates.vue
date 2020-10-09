<template lang="html">
  <div class="container">
    <Project />
  </div>
</template>

<script>
  import {onUnmounted} from 'vue'
  import Project from '@/components/Project/Project.vue'
  export default {
    name: 'Housemates',
    components: {
      Project
    },
    setup() {
      onUnmounted(() => {
        console.log("left")
      })
    }
  }
</script>

<style lang="css" scoped>
</style>
