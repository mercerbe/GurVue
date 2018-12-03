import Vue from "vue";
//elememt
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App";
//store
import store from "./store";

Vue.use(ElementUI);

new Vue({
	//store: store can be written as store bc key/value are the same
	store,
	render: h => h(App),
}).$mount("#app");
