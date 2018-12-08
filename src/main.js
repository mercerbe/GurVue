import Vue from "vue";
//elememt
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App";
//store
import store from "./store";
//vue router
import VueRouter from "vue-router";
//auth handler component
import AuthHandler from "./components/AuthHandler.vue";

Vue.use(VueRouter);
Vue.use(ElementUI);

//init router instance
const router = new VueRouter({
	mode: "history",
	routes: [
		//if specified path is hit, call component
		{ path: "/oauth2/callback", component: AuthHandler },
	],
});

new Vue({
	//store: store can be written as store bc key/value are the same
	store,
	//pass the router instance into the Vue app
	router,
	render: h => h(App),
}).$mount("#app");
