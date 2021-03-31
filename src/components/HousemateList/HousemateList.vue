<template lang="html">
  <div class="housemates">
    <Housemate v-for="houseMate in houseMates"
    :houseMate= "houseMate"
    :key="houseMate.id" />
  </div>
</template>

<script>
  import Housemate from '@/components/Housemate/Housemate';
  import { inject } from 'vue';
  export default {
    name: 'HousemateList',
    components: {
      Housemate
    },
    props: {
      houseMates: Array,
    },
    setup() {
      const user  = inject('user')
      const greeting  = inject('greeting',)
      console.log(greeting.morning("sola")) 
      console.log(user)
      return {
        
      }
    }
  };
</script>

<style lang="css" scoped src="./HousemateList.css"></style>
