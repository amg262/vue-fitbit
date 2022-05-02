<template>
  <div class="album bg-primary">
    <h6 class="card-title">{{ item.title }}</h6>
    <p class="card-text">Artist: {{ item.artist }}</p>
    <p class="card-text">Number of tracks: {{ item.trackCount }}</p>
  </div>
</template>

<script>
import {Album} from "@/models/LibraryItems";

export default {
  name: "LibraryAlbum",
  props: {
    item: {
      type: Album
    }
  }
}
</script>

<style scoped>

</style>