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

    <!--購物車 dialog-->
    <el-dialog title="購物車" :visible.sync="showPopupCart">
      <el-table :data="getProductsInCart" empty-text='購物車為空喔!'>
        <el-table-column property="name" label="名稱" width="150"></el-table-column>
        <el-table-column property="details" label="內容" width="200"></el-table-column>
        <el-table-column property="price" label="價格"></el-table-column>
      </el-table>
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
    };
  },
  computed: {
    ...mapGetters(["getProductsInCart", "getPopupCart"]),
    ...mapActions(["showOrHiddenPopupCart"]),
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
    // 打開購物車
  }
};
</script>