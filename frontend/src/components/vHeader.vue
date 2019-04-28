<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1">全部</el-menu-item>
    <el-menu-item index="2">手機</el-menu-item>
    <el-menu-item index="3">筆記型電腦</el-menu-item>
    <el-menu-item index="4">購物車</el-menu-item>
  </el-menu>
</template>
<!-- .js 檔案在此相依 -->
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>