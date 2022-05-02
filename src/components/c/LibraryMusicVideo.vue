<template>
  <div class="tvshow bg-primary">
    <img :src="item.img" class="card-img-top card-header"  alt="">
    <div>
      <h1>{{item.img}}</h1>
      <h6 class="card-title">{{ item.title }}</h6>
      <p class="card-text">Artist: {{ item.artist }}</p>
    </div>
  </div>
</template>
<script>
import {MusicVideo} from "@/models/LibraryItems";


export default {
  name: "LibraryMusicVideo",
  props: {
    item: {
      type: MusicVideo
    }
  }
}
</script>

<style scoped>

</style>