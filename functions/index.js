const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fs = require("fs");

admin.initializeApp();

// Getting and replacing meta tags
exports.preRender = functions.https.onRequest((request, response) => {
	// Getting the path
	const path = request.path ? request.path.split("/") : request.path;
	console.log(path);

	try {
		// Getting index.html text
		let index = fs.readFileSync("./index.html").toString();

		// Changing metas function
		const setMetas = (title, description, url) => {
			index = index
				.replace(/__TITLE__/g, title)
				.replace(/__DESCRIPTION__/g, description)
				.replace(/__URL__/g, url);
		};

		// Navigation menu
		if (path[1] === "resume") setMetas("Resume - Seyon Rajagopal", "Hello! My name is Seyon Rajagopal. View My Resume!", "https://seyon.dev/resume");
		else if (path[1] === "404") setMetas("404 - Seyon Rajagopal", "This page does not exist!", "https://seyon.dev/404");
		else if (path[1] === "")
			setMetas(
				"Portfolio - Seyon Rajagopal",
				"Hello! My name is Seyon Rajagopal, and I am a Computer Science Co-op student at Ryerson University. I build, design and develop websites and applications.",
				"https://seyon.dev/"
			);

		// Sending index.html
        response.set('Cache-Control', 'no-cache');
		response.status(200).send(index);
	} catch (error) {
		console.log(error);
		response.sendStatus(500);
	}
});
