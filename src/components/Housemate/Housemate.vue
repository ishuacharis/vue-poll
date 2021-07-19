<template lang="html">
  <div class="housemate">
    <router-link 
      :to="{name: 'Housemate', 
      params: {screen_name: houseMate.screen_name} }" 
      class="avatar avatar-large">
      <img :src="require(`@/assets/${houseMate.avatar}`)" alt="" />
    </router-link>
    
  </div>
</template>

<script>
  export default {
    name: 'Housemate',
    props: {
      houseMate: Object,
    },
  }
</script>

<style lang="css" scoped src="./Housemate.css"></style>
