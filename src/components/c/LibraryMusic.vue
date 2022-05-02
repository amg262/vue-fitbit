<template>
  <div class="tvshow bg-primary">
    <img :src="item.img" class="card-img-top card-header" >
    <div>
      <h6 class="card-title">{{ item.title }}</h6>
      <p class="card-text">Artist: {{ item.artist }}</p>
      <p class="card-text">Tracks: {{ item.trackCount }}</p>
    </div>
  </div>
</template>

<script>
import {} from "@/models/LibraryItems";

export default {
  name: "LibraryMusic",
  props: {
    item: {

    }
  }
}
</script>

<style scoped>

</style>