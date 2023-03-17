const server = "http://localhost:8080/";
if (window.location.host === "github.com") {
	let chunks = window.location.href.split("/");
	let code = chunks[chunks.length - 1];
	// IMPORTANT: add a flag so that the extension doesnt save github oauth from other applications
	if (code.slice(0, 6) === "?code=") {
		authCode = code.slice(6);
		console.log(authCode);
		fetch(server + "authcode", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				authCode,
			}),
		})
			.then((res) => res.json())
			.then(({ token }) => {
				console.log(token);
				if (token === "invalid") {
					throw new Error("Something went wrong sending code to server");
				}
				chrome.storage.sync.set({ token }, () => {
					console.log("Set token: " + token);
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}
}

const submit = () => {
	setTimeout(async () => {
		// CHANGE THIS TO ON URL CHANGE
		uri = window.location.href;
		parts = uri.split("/");
		shouldSubmit = false;
		for (const i of parts) {
			if (i === "submissions") {
				shouldSubmit = true;
			}
		}
		if (!shouldSubmit) {
			return;
		}
		problemName = parts[parts.length - 4];
		fileName = problemName + "." + "py";

		const editor = document.querySelector(".language-python");
		code = editor.textContent;
		console.log(code);
		fetch(server, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				code,
				fileName,
			}),
		})
			.then((data) => console.log(data))
			.catch((err) => {
				console.error(err);
			});
	}, 3000);
};

if (window.location.host === "leetcode.com") {
	setTimeout(() => {
		const buttons = document.querySelectorAll(".bg-green-s");
		const button = buttons[buttons.length - 1];
		button.addEventListener("click", submit);
	}, 1000);
}
