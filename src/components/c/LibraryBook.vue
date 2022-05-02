<template>
  <div class="book bg-primary">
    <h4 class="card-title">{{ item.title }}</h4>
    <p class="card-text">Pages: {{ item.pages }}</p>
  </div>
</template>

<script>
import {Book} from "@/models/LibraryItems";

export default {
  name: "LibraryBook",
  props: {
    item: {
      type: Book
    }
  }
}
</script>

<style scoped>

</style>