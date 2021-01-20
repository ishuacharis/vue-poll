<template lang="html">
  <div class="housemates">
    <Housemate v-for="houseMate in houseMates"
    :houseMate= "houseMate"
    :key="houseMate.name" />
  </div>
</template>

<script>
  import Housemate from '@/components/Housemate/Housemate';
  export default {
    name: 'HousemateList',
    components: {
      Housemate
    },
    props: {
      houseMates: Array,
    },
    setup() {
     
    }
  };
</script>

<style lang="css" scoped src="./HousemateList.css"></style>
