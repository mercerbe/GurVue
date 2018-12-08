<template>
  <div class="main">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.main {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
