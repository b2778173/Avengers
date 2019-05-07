<template>
  <div class="checkout-box">
    <ul class="checkout-list">
      <transition-group name="fade">
        <li v-for="(product) in getProductsInCart" :key="product.name" class="checkout-product">
          <img :src="product.image" alt class="product-image">
          <h3 class="product-name">{{ product.name }}</h3>
          <span class="product-price">$ {{ product.price }},00</span>
          <button class="product-remove" @click="removeProduct(index)">X</button>
        </li>
      </transition-group>
    </ul>
    <div v-if="!hasProduct()" class="checkout-message">
      <h3>No products...</h3>
      <router-link to="./">Back to list of products</router-link>
    </div>
    <h3 class="total" v-if="hasProduct()">Total: $ {{ totalPrice() }}, 00</h3>
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script>
import { mapGetters, mapActions } from "vuex";
import '../../static/assets/css/cart.css'

export default {
  name: "",
  mixins: [],
  extends: {},
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getProductsInCart", "getProductsInCartSum"])
  },
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  methods: {
    ...mapActions(["removeProduct"]),
    remove() {},
    hasProduct() {
      return this.getProductsInCart.length > 0;
    }
  }
};
</script>