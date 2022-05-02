<template>
  <div class="tvshow bg-primary">
    <img :src="item.img" class="card-img-top card-header" >
    <div>
      <h6 class="card-title">{{ item.title }}</h6>
      <p class="card-text">Artist: {{ item.artist }}</p>
      <p class="card-text">Album: {{ item.album }}</p>
    </div>
  </div>
</template>

<script>
import {Song} from "@/models/LibraryItems";
export default {
  name: "LibrarySong",
  props: {
    item: {
      type: Song
    }
  }
}
</script>

<style scoped>
.card-topper-image {
  max-width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>