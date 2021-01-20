<template lang="html">
  <div class="container">
    <div class="project">
      <SideNav />
      <router-view />
  </div>
  </div>
</template>

<script>

  import SideNav from '@/components/shared/Navbar/SideNav';
  export default {
    name: 'Project',

    components: {
     SideNav
    },
  }
</script>

<style lang="css" src="./Project.css" scoped>
</style>
