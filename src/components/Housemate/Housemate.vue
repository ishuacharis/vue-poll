<template lang="html">
  <div class="housemate">
    <div class="avatar">
      <img :src="houseMate.avatar" alt="" />
    </div>
    <div>
      <h4 class="name">
        <router-link class="link" :to="{name: 'Housemate', params: {screen_name: houseMate.name}}">{{houseMate.name}}</router-link>
      </h4>
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

<style lang="css" scoped src="./Housemate.css"></style>
