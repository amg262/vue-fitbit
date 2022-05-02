<template>
  <div class="tvshow bg-primary">
    <div>
      <h6 class="card-title">{{ item.title }}</h6>
      <p class="card-text">Runtime: {{ item.artist }}</p>
    </div>
  </div>
</template>

<script>
import {} from "@/models/LibraryItems";

export default {
  name: "LibraryEbook",
  props: {
    item: {

    }
  }
}
</script>

<style scoped>

</style>