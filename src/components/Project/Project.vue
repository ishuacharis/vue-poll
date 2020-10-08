<template lang="html">
  <div class="project">
    <MyVote
      :totalVotes= "totalvotes"
      :remainingVotes= "remainingvotes"/>
    <Housemates
      :houseMates="houseMates"
      :incrementVote="onVoteIncrement"
      :decrementVote="onVoteDecrement" />
  </div>
</template>

<script>

  import VoteContext from '../../Context/VoteContext.js'
  import MyVote  from '@/components/MyVote/MyVote.vue'
  import Housemates from '@/components/Housemates/Housemates'
  export default {
    name: 'Project',
    components: {
      MyVote,Housemates
    },
    setup() {
      const {totalvotes,
            houseMates,
            remainingvotes,
            onVoteIncrement,
            onVoteDecrement
          } = VoteContext()
      return {
        totalvotes,
        houseMates,
        remainingvotes,
        onVoteIncrement,
        onVoteDecrement
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
