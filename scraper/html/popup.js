let login = () => {
	chrome.runtime.sendMessage("authorize");
};

document.querySelector("#login-btn").addEventListener("click", login);
