<template lang="html">
  <HousemateList :houseMates="houseMatesObj" v-if="!isLoading" />
  <div v-if="isLoading" class="loading-container">
    <div class="loading"></div>
  </div>
</template>

<script>
  import { useStore } from 'vuex';
  import {onUnmounted, ref, computed, onMounted} from 'vue'
  import HousemateList from '@/components/HousemateList/HousemateList.vue'
  import { getToken } from '@/helpers';
  import { setHousemates } from '../../store/vote/actions/action_creators';
  export default {
    name: 'Housemates',
    components: {
      HousemateList
    },
    provide: {
      user: "olawale Ogun"
    },
    setup() {
      
      const store =  useStore();
      const token  = getToken();
      const isLoading =  ref(true);
      let args = {
        endPoint: "/eviction",
        method: 'GET',
        token: token
      }
      const storeAsync = async () => {
        await store.dispatch(setHousemates(args));
        isLoading.value = false
      }
      onMounted(storeAsync)
      onUnmounted(() => {
        console.log("left")
      })
      
    return {
      storeAsync,
      isLoading,
      houseMatesObj: computed(() => store.getters["votes/houseMates"])
    }
  }
}
</script>

<style lang="css" scoped>
</style>
