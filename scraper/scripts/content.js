currUrl = window.location.href;
console.log(currUrl);

// // access the editor before submission
// setTimeout(() => {;
// 	// Get the file extension
// 	const wrapper = document.querySelector(".monaco-editor");
// 	file = wrapper.dataset.uri.split(".");
// 	extension = file[file.length - 1];

// 	// get the code
// 	const editor = document.querySelector(".monaco-editor .view-lines");
// 	// console.dir(editor);
// 	code = editor.textContent;
// 	uri = window.location.href;
// 	parts = uri.split("/");
// 	problemName = parts[parts.length - 2];
// 	fileName = problemName + "." + extension;

// 	console.log(fileName);
// 	console.log(code);
// }, 1000);

const submit = () => {
	setTimeout(() => {
		uri = window.location.href;
		console.log(uri);
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

		// send to server
	}, 3000);
};

setTimeout(() => {
	const buttons = document.querySelectorAll(".bg-green-s");
	const button = buttons[buttons.length - 1];
	button.addEventListener("click", submit);
}, 1000);
