const functions = require("firebase-functions");

const admin = require("firebase-admin");
const fs = require("fs");

admin.initializeApp();

// Getting and replacing meta tags
exports.preRender = functions.https.onRequest((request, response) => {
	const userAgent = request.headers["user-agent"].toLowerCase();

	const isBot =
		userAgent.includes("googlebot") ||
		userAgent.includes("yahoou") ||
		userAgent.includes("bingbot") ||
		userAgent.includes("baiduspider") ||
		userAgent.includes("yandex") ||
		userAgent.includes("yeti") ||
		userAgent.includes("yodaobot") ||
		userAgent.includes("gigabot") ||
		userAgent.includes("ia_archiver") ||
		userAgent.includes("facebookexternalhit") ||
		userAgent.includes("twitterbot") ||
		userAgent.includes("developers.google.com")
			? true
			: false;
	// Getting the path
	const path = request.path ? request.path.split("/") : request.path;
	console.log(path);

	// Getting index.html text
	let index = fs.readFileSync("./index.html").toString();
	var call = request.headers["x-forwarded-for"];
	console.log(call);
    
	// Changing metas function
	const setMetas = (title, description, url) => {
		index = index
			.replace(/__TITLE__/g, title)
			.replace(/__DESCRIPTION__/g, description)
			.replace(/__URL__/g, url);
	};

	setMetas(
		"Portfolio - Seyon Rajagopal",
		"Hello! My name is Seyon Rajagopal, and I am a Computer Science Co-op student at Ryerson University. I build, design and develop websites and applications.",
		"https://seyon.dev/"
	);

	// Navigation menu
	if (path[1] === "resume") setMetas("Resume - Seyon Rajagopal", "Hello! My name is Seyon Rajagopal. View My Resume!", "https://seyon.dev/resume");
	else if (path[1] === "404") setMetas("404 - Seyon Rajagopal", "This page does not exist!", "https://seyon.dev/404");

	response.status(200).send(index);
});
