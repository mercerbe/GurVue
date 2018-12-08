import api from "../../api/imgur";
import qs from "qs";

//state -- values that will be watched
const state = {
	token: null,
};
//getters -- check state, our token, pass in as arg
const getters = {
	isLoggedIn: state => {
		//turn value to boolean
		return !!state.token;
	},
};
//mutations -- update the state, mutations generally update one value or a few simple values
const mutations = {
	//args are state and actions passed in, token for this
	setToken: (state, token) => {
		state.token = token;
	},
};
//actions -- use commit to call a mutation with args: 1-string of mutation name, values of other args in mutation
const actions = {
	logout: ({ commit }) => {
		commit("setToken", null);
	},
	login: () => {
		api.login();
	},
	finalizeLogin({ commit }, hash) {
		const query = qs.parse(hash.replace("#", ""));
		commit("setToken", query.access_token);
	},
};

//export - again, identical key/value names can be exported as one word
export default {
	state,
	getters,
	mutations,
	actions,
};
