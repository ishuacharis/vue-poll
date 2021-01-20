<template lang="html">
  <HousemateList :houseMates="houseMates" />
</template>

<script>
  import { useStore } from 'vuex';
  import {onUnmounted, computed} from 'vue'
  import HousemateList from '@/components/HousemateList/HousemateList.vue'
  export default {
    name: 'Housemates',
    components: {
      HousemateList
    },
    setup() {
        const store =  useStore();
      onUnmounted(() => {
        console.log("left")
      })

      return {
        houseMates: computed(() => store.getters['votes/houseMates']),
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
