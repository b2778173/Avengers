<template>
  <div class="checkout-box" ref="checkBox" id="checkBox">
    <!-- product list -->
    <ul class="checkout-list">
      <transition-group name="fade">
        <li
          v-for="(product, index) in getProductsInCartSum"
          :key="product.name"
          class="checkout-product"
        >
          <img :src="product.img" alt class="product-image">
          <h3 class="product-name">{{ product.name }}</h3>
          <span class="product-price" style="place-self: center;">NT$ {{ product.price }},00</span>
          <el-input-number size="mini" v-model="product.amount" :min="1" :max="10" label="描述文字"></el-input-number>
          <button class="product-remove" @click="remove(index)">X</button>
          <!-- <el-button type="danger" icon="el-icon-delete" circle @click="remove(index)"></el-button> -->
        </li>
      </transition-group>
    </ul>
    <!-- checkout box  -->
    <div ref="checkoutOutter">
      <el-row v-if="hasProduct()">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark" :class="isSticky?'Sticky':''" ref="checkout">
            <el-card shadow="always">
              <el-button class="checkout-btn" type="primary" :span="4">結帳</el-button>
              <h3 class="total" v-if="hasProduct()">Total: NT $ {{ totalPrice() }}, 00</h3>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- no product display block -->
    <div v-if="!hasProduct()" class="checkout-message">
      <h3>No products...</h3>
      <router-link
        to="./AllProducts"
        class="el-button el-button--danger is-round"
      >Back to list of products</router-link>
    </div>
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
    return { num: 1, isSticky: false };
  },
  computed: {
    ...mapGetters(["getProductsInCart", "getProductsInCartSum"])
  },
  watch: {},
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    var initPageYOffset = window.pageYOffset;
  },
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
    },
    handleScroll() {
      let disFromTop = window.pageYOffset;
      console.log(this.$refs.checkBox.offsetHeight)
      let offsetBottom =
        (document.documentElement.scrollHeight - this.$refs.checkBox.offsetHeight)/2; // 上下距離
      console.log("目標距底部距離", offsetBottom);

      console.log("總高度=", document.documentElement.scrollHeight);
      console.log("可視高度", document.documentElement.clientHeight);
      console.log("距頂部", window.pageYOffset);
      let scrollable =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      // Scroll y1 - y2 > offsetBottom = > scrollable - y2 > offsetBottom = > scrollable - disFromTop > offsetBottom;
      // 向下滾動距離 == scrolTop;
      console.log("向上移動=", scrollable - disFromTop);
      if (scrollable - disFromTop >= offsetBottom) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    }
  }
};
</script>