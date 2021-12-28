const functions = require("firebase-functions");
const express = require("express");
const path = require("path");
const fs = require("fs").promises;

const app = express();

app.get("/", async (req, res) => {
	const filePath = path.resolve(__dirname, "./build", "index.html");
	try {
		let data = await fs.readFile(filePath, "utf-8");

		data = data
			.replace(/__TITLE__/g, "Portfolio - Seyon Rajagopal")
			.replace(/__URL__/g, "https://seyon.dev/")
			.replace(/__DESCRIPTION__/g, "Hello! My name is Seyon Rajagopal, and I am a Computer Science Co-op student at Ryerson University. I build, design and develop websites and applications.");

		res.send(data);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

app.get("/resume", async (req, res) => {
	const filePath = path.resolve(__dirname, "./build", "index.html");
	try {
		let data = await fs.readFile(filePath, "utf-8");
		
		data = data
			.replace(/__TITLE__/g, "Resume - Seyon Rajagopal")
			.replace(/__URL__/g, "https://seyon.dev/resume")
			.replace(/__DESCRIPTION__/g, "Hello! My name is Seyon Rajagopal. View My Resume!");

		res.send(data);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

app.get("/404", async (req, res) => {
	const filePath = path.resolve(__dirname, "./build", "index.html");
	try {
		let data = await fs.readFile(filePath, "utf-8");
		
		data = data
			.replace(/__TITLE__/g, "404 - Seyon Rajagopal")
			.replace(/__URL__/g, "https://seyon.dev/404")
			.replace(/__DESCRIPTION__/g, "This page does not exist.");

		res.send(data);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

app.use(express.static(path.resolve(__dirname, "./build")));

exports.preRender = functions.https.onRequest(app);
