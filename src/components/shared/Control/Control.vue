<template lang="html">
  <div class="control" @click="func">
    <span>{{operator}}</span>
  </div>
</template>

<script>
  export default {
    name: 'Control',
    props: {
      operator: String,
      func: Function
    },
  }
</script>

<style lang="css" scoped>
</style>
