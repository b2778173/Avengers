<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#333333"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1">全部</el-menu-item>
      <el-menu-item index="2">手機</el-menu-item>
      <el-menu-item index="3">筆記型電腦</el-menu-item>
      <el-menu-item index="4">購物車</el-menu-item>
      <el-badge
        :value="getProductsInCart.length > 0 ? getProductsInCart.length : hidden"
        class="item cart-icon"
      >
        <el-button
          type="primary"
          icon="el-icon-shopping-cart-2"
          circle
          @click="showPopupCart=!showPopupCart"
        ></el-button>
      </el-badge>
    </el-menu>

    <!--購物車 popup dialog-->
    <el-dialog title="購物車" :visible.sync="showPopupCart">
      <el-table :data="getProductsInCartSum" empty-text="購物車為空喔!">
        <el-table-column property="name" label="名稱" width="150"></el-table-column>
        <el-table-column align="center" property="amount" label="數量" width="200"></el-table-column>
        <el-table-column property="price" label="價格"></el-table-column>
      </el-table>
      <!-- <table>
        <tr>
          <th>名稱</th>
          <th>數量</th>
          <th>價格</th>
        </tr>
        <tr v-for="p in getProductsInCartSum" :key="p.name">
          <td>{{p.name}}</td>
          <td><el-input-number size="mini" v-model="p.amount"></el-input-number></td>
          <td>{{p.price}}</td>
        </tr>
      </table>-->
      <router-link to="/Cart">
        <el-button
          v-if="getProductsInCart.length>0"
          type="primary"
          size="small"
          style="margin-top: 8px"
        >看購物車</el-button>
      </router-link>
    </el-dialog>
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      showPopupCart: false,
      amount: 5
    };
  },
  mounted() {},
  computed: {
    ...mapGetters([
      "getProductsInCart",
      "getPopupCart",
      "getProductsInCartSum"
    ]),
    ...mapActions(["showOrHiddenPopupCart"])
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
    // 打開購物車
  }
};
</script>