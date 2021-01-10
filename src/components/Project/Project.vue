<template lang="html">
  <div class="project">
    <Housemates :houseMates="houseMates" />
  </div>
</template>

<script>

  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import Housemates from '@/components/Housemates/Housemates';
  export default {
    name: 'Project',

    components: {
      Housemates
    },
    setup() {
      const store =  useStore();
      return {
        houseMates: computed(() => store.getters['votes/houseMates']),
      }
    },
  }
</script>

<style lang="css" scoped>
</style>
