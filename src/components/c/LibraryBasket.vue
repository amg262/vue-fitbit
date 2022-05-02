<template>

  <div class="col-12 col-md-4">

      <i class="fas fa-shopping-bag"></i> Library Basket
      <basket-item v-for="(item, i) in basket" :item="item" @remove-it="emited => $emit('remove-it', emited)" :key="i"  ></basket-item>

      <div class="row">
      <button class="btn btn-success" @click="basket.checkoutBasket()">Check Out</button>
      </div>
  </div>
</template>

<script>
import BasketItem from "@/components/LibraryBasketItem";

export default {
  name: "LibraryBasket",
  components: {BasketItem},
  props: {basket: Array},
  methods: {}
}
</script>

<style>

</style>