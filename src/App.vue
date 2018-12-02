<template>
  <div class="main">
    <Header></Header>
  </div>
</template>


<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style scoped>
.main {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
