import fetch from "node-fetch";
import CONFIG from "./config.mjs";

const tokenUrl = "https://github.com/login/oauth/access_token";
export let codeToToken = async (authCode) => {
	authCode = authCode || "default";
	let params = new URLSearchParams();
	params.append("client_id", CONFIG.clientId);
	params.append("client_secret", CONFIG.clientSecret);
	params.append("code", authCode);
	params.append("redirect_uri", CONFIG.redirectUri);
	try {
		let res = await fetch(tokenUrl, {
			method: "POST",
			body: params,
			headers: {
				Accept: "application/json",
			},
		});
		let data = await res.json();
		console.log(data);
		return data.access_token || "invalid";
	} catch (err) {
		console.error(err);
		return "invalid";
	}
	// return fetch(tokenUrl, {
	// 	method: "POST",
	// 	body: params,
	// 	headers: {
	// 		Accept: "application/json",
	// 	},
	// })
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		console.log(data);
	// 		return data.access_token;
	// 	})
	// 	.catch((error) => {
	// 		console.error(error);
	// 		return "invalid";
	// 	});
};
