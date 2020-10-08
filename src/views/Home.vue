<template>
  <div class="container">
    <Project />
  </div>
</template>

<script>
// @ is an alias to /src
import Project from '@/components/Project/Project.vue'
export default {
  name: 'Home',
  components: {
    Project
  }
}
</script>


<style>
  .container {
    width: 100;
    max-width: 100rem;
    padding: 0 2rem;
  }
</style>
