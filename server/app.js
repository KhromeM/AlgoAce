const app = require("express")();
const { json } = require("express");
const CONFIG = require("./config.js");
const fs = require("fs");
const cors = require("cors");
app.use(json());
app.use(cors());

app.use(async (req, res, next) => {
	// Validate loggined in user
	if (req.body) {
		code = req.body.code;
		fileName = req.body.fileName;
		console.log(code);
		console.log(fileName);
		res.end("Got file: " + fileName);
		return;
	}
	res.end("Hello");
	next();
});

app.listen(8080, () => {
	console.log("Server is listening on port 8080");
});
