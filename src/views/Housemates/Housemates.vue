<template lang="html">
  <HousemateList :houseMates="houseMatesObj.houseMates" v-if="!isLoading" />
  <div v-if="isLoading" class="loading-container">
    <div class="loading"></div>
  </div>
</template>

<script>
  import { useStore } from 'vuex';
  import {onUnmounted,onMounted, ref, reactive} from 'vue'
  import HousemateList from '@/components/HousemateList/HousemateList.vue'
  import { getToken, setEviction } from '@/helpers';
  import routes from '@/routes';
  import { setHousemates } from '../../store/vote/actions/action_creators';
  export default {
    name: 'Housemates',
    components: {
      HousemateList
    },
    setup() {
      
      const store =  useStore();
      const token  = getToken();
      const { eviction } = routes();
      const isLoading =  ref(true);
      const houseMatesObj = reactive({});
      let args = {
        endPoint: "/eviction",
        method: 'GET',
        token: token
      }
      const getHousemates = async () => {
        const { response:{data} } =  await eviction(args);
        houseMatesObj.houseMates = data
        store.dispatch(setHousemates(houseMatesObj))
        setEviction(houseMatesObj.houseMates)
        isLoading.value = false;
      }

      onMounted(getHousemates)
      onUnmounted(() => {
        console.log("left")
      })
      
    return {
      houseMatesObj,
      isLoading,
      getHousemates
    }
  }
}
</script>

<style lang="css" scoped>
</style>
