<template lang="html">
  <HousemateList :houseMates="houseMatesObj.houseMates" />
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
      const feedback  = ref([]);
      const houseMatesObj = reactive({});
      let args = {
        endPoint: "/eviction",
        method: 'GET',
        token: token
      }
      const getHousemates = async () => {
        feedback.value =  await eviction(args);
        const { response:{data} } = feedback.value;
        houseMatesObj.houseMates = data
        store.dispatch(setHousemates(houseMatesObj))
        setEviction(houseMatesObj.houseMates)
      }

      onMounted(getHousemates)
      onUnmounted(() => {
        console.log("left")
      })
      
    //computed(() => store.getters['votes/houseMates']),
    return {
      houseMatesObj,
      getHousemates
    }
  }
}
</script>

<style lang="css" scoped>
</style>
