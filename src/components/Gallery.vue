<template>
  <div>
    <h3 v-if="isLoggedIn" class="ui center aligned header">Welcome!</h3>
    <div v-if="isLoggedIn" class="image-container">
      <img
        v-for="image in allImages"
        :key="image.link"
        :src="image.link"
        class="ui medium rounded image"
      >
    </div>
    <h2 v-else class="ui center aligned icon header">
      <i class="images outline icon"></i>
      Log In to Begin
    </h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Gallery",
  computed: mapGetters(["allImages", "isLoggedIn"]),
  created() {
    this.fetchImages();
  },
  methods: mapActions(["fetchImages"])
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
h3 {
  width: 100vw;
  text-align: center;
}

img {
  max-width: 100%;
  padding: 5px;
}
</style>
