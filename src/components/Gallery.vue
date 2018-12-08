<template>
  <div v-if="isLoggedIn" class="image-container">
    <img v-for="image in allImages" :key="image.link" :src="image.link">
  </div>
  <h2 v-else class="ui center aligned icon header inverted">
    <i class="images outline icon"></i>
    Log In to Begin
  </h2>
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
h2 {
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: whitesmoke;
}

img {
  max-width: 100%;
  padding: 5px;
}
</style>
