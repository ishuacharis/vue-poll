<template lang="html">
  <div class="MyVote">
    <h4 class="vote-count">{{totalVotes}}</h4>
    <div class="progress-bar">
        <progress :value= "remainingVotes" :max="totalVotes"></progress>
    </div>
  </div>
</template>

<script>
  import { onUpdated } from 'vue'
  export default {
    name: 'MyVote',
    props : {
      totalVotes : Number,
      remainingVotes: Number
    },
    setup() {

      onUpdated(() => {
        console.log('updated!')
      })
    }
  }
</script>

<style lang="css" scoped>
  @import 'MyVote.css'
</style>
