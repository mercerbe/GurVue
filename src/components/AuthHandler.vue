<template>
  <div>
    <div>please wait...</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AuthHandler",
  ...mapActions(["finalizeLogin"]),
  created() {
    this.finalizeLogin(window.location.hash);
  }
};
</script>

<style scoped>
</style>

