import express from "express";
import { json } from "express";
import cors from "cors";
import { codeToToken } from "./oauth.mjs";

let app = express();
app.use(json());
app.use(cors());

app.use((req, res, next) => {
	console.log("Got Request!");
	next();
});
app.post("/", async (req, res) => {
	let code = req.body?.code;
	let fileName = req.body?.fileName;
	console.log(code);
	console.log(fileName);
	res.send("Got: " + fileName);
});

app.post("/authcode/", async (req, res) => {
	let authCode = req.body?.authCode;
	console.log("authCode: " + authCode);
	let token = await codeToToken(authCode);
	console.log("TOKEN: " + token);
	res.send(JSON.stringify({ token }));
});

app.listen(8080, () => {
	console.log("Server is listening on port 8080");
});
