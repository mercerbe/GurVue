<template>
  <div class="ui inverted segment">
    <div class="ui inverted secondary pointing menu">
      <router-link to="/" class="active item">GurVue</router-link>

      <div class="right menu">
        <div v-if="isLoggedIn" class="horizontal">
          <router-link to="/upload" class="item">Upload</router-link>
          <router-link to="/" class="item">Gallery</router-link>
          <a class="item" @click="logout">Logout</a>
        </div>
        <a v-else class="ui item" @click="login">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AppHeader",
  computed: mapGetters(["isLoggedIn"]),
  methods: mapActions(["login", "logout"])
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
.segment {
  border-radius: 0;
}
</style>
