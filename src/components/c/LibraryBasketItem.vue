<template>
  <div class="col-12">
    <div class="card-header"></div>
    <div class="card-body">
    <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
      <button class="btn btn-danger" @click="remove(item)">Remove</button>
    </div>
  </div>
</template>

<script>
import LibraryBook from "@/components/LibraryBook";
import LibraryMovie from "@/components/LibraryMovie";
import LibraryAlbum from "@/components/LibraryAlbum";
import LibrarySong from "@/components/LibrarySong";

export default {
  name: "BasketItem",
  components: {
    LibraryBook,
    LibraryMovie,
    LibraryAlbum,
    LibrarySong
  },
  props: {
    item: Object
  },
  methods: {
    remove(item) {
      this.$emit('remove-it', item);
      console.log(item)
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