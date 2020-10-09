<template lang="html">
  <div class="project">
    <Housemates :houseMates="houseMates" />
  </div>
</template>

<script>

  import VoteContext from '../../Context/VoteContext.js'
  import Housemates from '@/components/Housemates/Housemates'
  export default {
    name: 'Project',
    components: {
      Housemates
    },
    setup() {
      const {
            houseMates,
          } = VoteContext()
      return {
        houseMates,
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
