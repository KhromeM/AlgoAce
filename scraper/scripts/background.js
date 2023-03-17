let AUTHORIZATION_URL = "https://github.com/login/oauth/authorize";
let CLIENT_ID = "e89ba5a6bc9f15bf08d5";
let REDIRECT_URL = "https://github.com/";

let sendToAuth = () => {
	let url = `${AUTHORIZATION_URL}?client_id=${CLIENT_ID}&redirect_uri${REDIRECT_URL}&scope=repo`;
	chrome.tabs.create({ url, active: true }, () => {
		// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		// 	console.log(tabs[0].pendingUrl);
		// });
	});
};
chrome.runtime.onMessage.addListener((message) => {
	if (message == "authorize") {
		sendToAuth();
	}
});
// url = "";
// chrome.action.onClicked.addListener(async (tab) => {
// 	const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
// 	const nextState = prevState === "ON" ? "OFF" : "ON";
// 	await chrome.action.setBadgeText({
// 		tabId: tab.id,
// 		text: nextState,
// 	});
// });
