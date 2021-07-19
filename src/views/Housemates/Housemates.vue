<template lang="html">
  <HousemateList :houseMates="houseMatesObj" v-if="!isLoading && !error" />
  <div v-if="isLoading" class="loading-container">
    <div class="loading"></div>
  </div>
  <div v-if="error" class="loading-container">
    <div class="error"> {{ error }} </div>
  </div>
</template>

<script>
  import { useStore } from 'vuex';
  import {onUnmounted, computed, onMounted} from 'vue'
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
      let args = {
        endPoint: "/eviction",
        method: 'GET',
        token: token
      }
      const storeAsync = async () => {
        await store.dispatch(setHousemates(args));
      }
      onMounted(storeAsync)
      onUnmounted(() => {
        console.log("left")
      })
      
    return {
      storeAsync,
      houseMatesObj: computed(() => store.getters["votes/houseMates"]),
      error: computed(() => store.getters.error),
      isLoading: computed(() => store.getters.loading)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
