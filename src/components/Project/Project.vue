<template lang="html">
  <div class="project">
    <SideNav />
    <Housemates :houseMates="houseMates" />
  </div>
</template>

<script>

  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import SideNav from '@/components/shared/Navbar/SideNav';
  import Housemates from '@/components/Housemates/Housemates';
  export default {
    name: 'Project',

    components: {
      Housemates, SideNav
    },
    setup() {
      const store =  useStore();
      return {
        houseMates: computed(() => store.getters['votes/houseMates']),
      }
    },
  }
</script>

<style lang="css" src="./Project.css" scoped>
</style>
