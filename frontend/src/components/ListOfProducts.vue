<template>
  <ul class="listOfProducts">
    <el-card v-for="(product, index) in products" :key="index" class="product">
      <img :src="product.image" alt>
      <router-link to="/product-details">
        <h2 class="product-name" @click="addCurrentProduct(product)">{{ product.name }}</h2>
      </router-link>
      <div class="product-price">
        <span>R$ {{ product.price }}, 00</span>
        <span>10 x {{ Math.round(product.price / 10) }}, 00</span>
      </div>
      <el-button
        type="primary"
        icon="el-icon-plus"
        style=" width:100%"
        @click.native="addProductToCart(product)"
      >Add to cart</el-button>
    </el-card>
  </ul>
</template>
<!-- .js 檔案在此相依 -->
<script>
import { mapActions } from "vuex";

export default {
  name: "",
  mixins: [],
  extends: {},
  components: {},
  props: ["products"],
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  methods: {
    ...mapActions(["addProduct", "currentProduct"]),
    addProductToCart(product) {
      console.log("addProduct");
      this.$message({ message: "加入購物車 !", type: "success" });
      this.addProduct(product);
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    }
  }
};
</script>