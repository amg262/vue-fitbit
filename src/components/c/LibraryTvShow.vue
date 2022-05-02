<template>
  <div class="tvshow bg-primary">
    <img :src="item.img" class="card-img-top card-header" :alt="item.shName">
    <div>
    <h6 class="card-title">{{ item.epName }}</h6>
    <p class="card-text">Show: {{ item.shName }}</p>
    </div>
  </div>
</template>

<script>
import {TvShow} from "@/models/LibraryItems";

export default {
  name: "LibraryTvShow",
  props: {
    item: {
      type: TvShow
    }
  }
}
</script>

<style scoped>

</style>