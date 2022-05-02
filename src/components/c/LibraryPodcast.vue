<template>
  <div class="tvshow bg-primary">
    <img :src="item.img" class="card-img-top card-header" >
    <div>
      <h6 class="card-title">{{ item.title }}</h6>
      <p class="card-text">Pub: {{ item.pub }}</p>
    </div>
  </div>
</template>
<script>
import {Podcast} from "@/models/LibraryItems";

export default {
  name: "LibraryPodcast",
  props: {
    item: {
      type: Podcast
    }
  }
}
</script>

<style scoped>

</style>