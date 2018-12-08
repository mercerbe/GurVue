<template>
  <div>
    <AppHeader/>
    <div class="ui container">
      <router-view/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
