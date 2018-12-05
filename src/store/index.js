import Vuex from "vuex";
import Vue from "vue";
import auth from "./modules/auth";

//connect vuex to vue
Vue.use(Vuex);

//store to manage areas of app -- collection of modules, state, mutations, getters
export default new Vuex.Store({
	modules: {
		auth, //auth module from export
	},
});
