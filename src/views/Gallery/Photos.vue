<template lang="html">
  <div class="container">
    <div class="Gallery">
      <div class="buttons">
        <ul class="button-list">
          <li class="button-item">
            <button class="button" @click="photosGet('Nature')">Nature</button>
          </li>
          <li class="button-item">
            <button class="button" @click="photosGet('Beauty')">Beauty</button>
          </li>
          <li class="button-item">
            <button class="button" @click="photosGet('Girls')">Girls</button>
          </li>
          <li class="button-item">
            <button class="button" @click="photosGet('Clothing')">Clotthing</button>
          </li>
        </ul>
      </div>

      <div class="center-gallery">
        <template v-for="photo in photos" :key="photo.id">
          <ErrorBoundary>
            <Photo v-bind:photo="photo"  />
          </ErrorBoundary>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {ref ,} from 'vue'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary.vue'
import Photo from './Photo.vue'
import PixabayContext from "@/Context/PixabayContext"
export default {
  name: 'Photos',
  components: {Photo, ErrorBoundary},
  async setup() {
    const {getPhotos} = PixabayContext()
    const photos = ref(null)


      try {
        photos.value  = await getPhotos()
      } catch (e) {
        console.log(`the error is ${e} from photos component`)
      }

      const photosGet = async (queryString) => {
        photos.value = await getPhotos(queryString)
      }


      return  {photos, getPhotos, photosGet}
  }

}
</script>

<style lang="css">
</style>
