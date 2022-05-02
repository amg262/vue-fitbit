<template>
  <div class="tvshow bg-primary">
    <img :src="item.img" class="card-img-top card-header" >
    <div>
      <h6 class="card-title">{{ item.app }}</h6>
      <p class="card-text">Genre: {{ item.genre }}</p>
    </div>
  </div>
</template>

<script>
import {Software} from "@/models/LibraryItems";

export default {
  name: "LibrarySoftware",
  props: {
    item: {
      type: Software
    }
  }
}
</script>

<style scoped>

</style>