<template>
  <div>
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">GurVue</el-menu-item>
      <el-menu-item index="4" id="login">
        <a href="#" @click="login">Login</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
//import actions module from vuex
import { mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    //connect an action to the component
    ...mapActions(["login"]) //...takes all actions from module and adds to object and add other actions
  }
};
</script>

<style scoped>
#login {
  float: right;
}
</style>
