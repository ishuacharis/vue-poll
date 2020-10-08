<template lang="html">
  <div class="housemate">
    <div class="avatar">
      <img :src="houseMate.avatar" alt="" />
    </div>
    <div>
      <h4 class="name">{{houseMate.name}}</h4>
      <div class="controls">
        <div class="control" @click="onVoteIncrement">
          <span>+</span>
        </div>
        <div class="control">
          <input type="text" :value="houseMate.voteCount" disabled  />
        </div>
        <div class="control" @click="onVoteDecrement">
          <span>-</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Housemate',
    props: {
      houseMate: Object,
      incrementVote: Function,
      decrementVote: Function
    },
    setup(props) {
      const onVoteIncrement = () => {
        props.incrementVote(props.houseMate)
      }
      const onVoteDecrement = ()  => {
        props.decrementVote(props.houseMate)
      }

      return{
        onVoteIncrement,
        onVoteDecrement,

      }
    }
  }
</script>

<style lang="css" scoped>
  @import 'Housemate.css'
</style>
