<template lang="html">
  <Housemate v-for="houseMate in houseMates"
      :houseMate= "houseMate"
      :incrementVote="incrementVote"
      :decrementVote="decrementVote"
      :key="houseMate.name" />
</template>

<script>
  import Housemate from '@/components/Housemate/Housemate'
  export default {
    name: 'Housemates',
    components: {
      Housemate
    },
    props: {
      houseMates: Array,
      incrementVote: Function,
      decrementVote: Function,
    },
  }
</script>

<style lang="css" scoped>
  @import 'Housemates.css'
</style>
