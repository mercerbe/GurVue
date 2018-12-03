import qs from "qs";

const CLIENT_ID = "0dbabde6588ba97";
const URL = "https://api.imgur.com";

//helpers for imgur's api
export default {
	login() {
		const queryString = {
			client_id: CLIENT_ID,
			response_type: "token",
		};
		//create url with qs library
		window.location = `${URL}/oauth2/authorize?${qs.stringify(queryString)}`;
	},
};
