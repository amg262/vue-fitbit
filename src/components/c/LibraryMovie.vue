<template>
  <div class="tvshow bg-primary">
    <img :src="item.img" class="card-img-top card-header" >
    <div>
      <h6 class="card-title">{{ item.title }}</h6>
      <p class="card-text">Runtime: {{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import {Movie} from "@/models/LibraryItems";

export default {
  name: "LibraryMovie",
  props: {
    item: {
      type: Movie
    }
  }
}
</script>

<style scoped>

</style>