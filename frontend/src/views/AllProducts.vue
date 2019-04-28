<template>
  <div>
    <v-header/>
    <listOfProducts :products="getAllProducts"/>
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script>
import { mapGetters } from "vuex";
import listOfProducts from "@/components/ListOfProducts.vue";
import "../../static/assets/css/products.css";
import vHeader from "@/components/vHeader";

export default {
  name: "",
  mixins: [],
  extends: {},
  components: { listOfProducts, vHeader },
  props: [],
  data() {
    return {};
  },
  computed: { ...mapGetters(["getAllProducts"]) },
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  methods: {}
};
</script>