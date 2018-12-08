import Vue from "vue";
import App from "./App";
import store from "./store";
import VueRouter from "vue-router";
import AuthHandler from "./components/AuthHandler";
import Gallery from "./components/Gallery";
import UploadForm from "./components/UploadForm";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Gallery },
    { path: "/upload", component: UploadForm },
    { path: "/oauth2/callback", component: AuthHandler }
  ]
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
