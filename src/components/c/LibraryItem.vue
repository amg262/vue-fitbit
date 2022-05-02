<template>
  <div :class="{'border-success' : item.isAvailable()}" class="card">
    <div class="card-header">
      {{ item.title }}
    </div>
    <component :is="typeOfItem" :item="item"></component>
    <div class="card-footer">
      <button v-if="item.isAvailable()" class="btn btn-outline-success m-2 disabled">Available</button>
      <button v-else class="btn btn-caution m-2" @click="item.checkIn()">Check In</button>
      <button class="btn btn-danger m-2" @click="item.remove()">Remove</button>
      <button v-if="item.isAvailable()" class="btn btn-primary m-2" @click="addBasket(item)">Add to Basket</button>
    </div>
  </div>
</template>

<script>
import LibraryBook from "@/components/c/LibraryBook";
import LibraryMovie from "@/components/c/LibraryMovie";
import LibraryAlbum from "@/components/c/LibraryAlbum";
import LibrarySong from "@/components/c/LibrarySong";
import LibraryMusicVideo from "@/components/c/LibraryMusicVideo";
import LibraryTvShow from "@/components/c/LibraryTvShow";

export default {
  name: "LibraryItem",
  components: {LibraryBook, LibraryMovie, LibraryAlbum, LibrarySong, LibraryMusicVideo, LibraryTvShow},
  props: {
    item: Object,
    addRepair: Function,
  },
  methods: {
    addBasket(item) {
      this.$emit('add-to-basket', item);
    }
  },
  computed: {
    typeOfItem() {
      return 'Library' + this.item.constructor.name;
    }
  },

}
</script>

<style scoped>

</style>