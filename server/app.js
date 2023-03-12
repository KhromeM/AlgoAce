const app = require("express")();
const { json } = require("express");
const fs = require("fs");
const CONFIG = JSON.parse();
app.use(json());

app.use(async (res, req, next) => {
	// Validate loggined in user
	next();
});
