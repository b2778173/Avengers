<template>
  <div class="checkout-box">
    <ul class="checkout-list">
      <transition-group name="fade">
        <li
          v-for="(product, index) in getProductsInCartSum"
          :key="product.name"
          class="checkout-product"
        >
          <img :src="product.img" alt class="product-image">
          <h3 class="product-name">{{ product.name }}</h3>
          <span class="product-price" style="place-self: center;">$ {{ product.price }},00</span>
          <el-input-number size="mini" v-model="product.amount" :min="1" :max="10" label="描述文字"></el-input-number>
          <button class="product-remove" @click="remove(index)">X</button>
           <!-- <el-button type="danger" icon="el-icon-delete" circle @click="remove(index)"></el-button> -->
        </li>
      </transition-group>
    </ul>
    <div v-if="!hasProduct()" class="checkout-message">
      <h3>No products...</h3>
      <router-link to="./AllProducts">Back to list of products</router-link>
    </div>
    <h3 class="total" v-if="hasProduct()">Total: $ {{ totalPrice() }}, 00</h3>
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script>
import { mapGetters, mapActions } from "vuex";
import "../../static/assets/css/cart.css";

export default {
  name: "",
  mixins: [],
  extends: {},
  components: {},
  props: [],
  data() {
    return { num: 1 };
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
    ...mapActions(["removeProduct", "addProduct"]),
    remove(index) {
      this.removeProduct(index);
    },
    hasProduct() {
      return this.getProductsInCartSum.length > 0;
    },
    totalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < this.getProductsInCartSum.length; i++) {
        totalPrice +=
          this.getProductsInCartSum[i].price *
          this.getProductsInCartSum[i].amount;
      }
      return totalPrice;
    }
  }
};
</script>