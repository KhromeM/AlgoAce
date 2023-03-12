chrome.runtime.onInstalled.addListener(async () => {
	console.log("Installed!");
	await chrome.action.setBadgeText({
		text: "OFF",
	});
});
url = "";
chrome.action.onClicked.addListener(async (tab) => {
	const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
	const nextState = prevState === "ON" ? "OFF" : "ON";
	await chrome.action.setBadgeText({
		tabId: tab.id,
		text: nextState,
	});
});
