<template lang="html">
  <div class="single">
    <div class ="top">
      <div class="big-image">
        <img :src="photo.largeImageURL" />
      </div>
      <div class="small-image">
        <img :src="photo.previewURL" />
      </div>
    </div>
    <div class="bottom">
      <div class="avi">
        <div class="user-avatar">
          <img :src = "photo.userImageURL" />
        </div>
      </div>
      <div class="rating">
        <span class="counts">{{shortenCounts(photo.favorites)}}</span>
        <span class="counts">{{shortenCounts(photo.likes)}}</span>
        <span class="counts">{{shortenCounts(photo.views)}}</span>
        <span class="counts">{{shortenCounts(photo.downloads)}}</span>
        <span class="counts">{{shortenCounts(photo.comments)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Helper from "@/Helper"
  export default {
    name: 'Photo',
    props: ['photo'],

    setup() {
      const {shortenCounts} = Helper()

      return {shortenCounts}
    }
  }
</script>

<style lang="css" scoped>


</style>
