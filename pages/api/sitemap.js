const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
import axios from "axios";

export default async function Sitemap(req, res) {
	try {
		const links = [];
		const pages = ["/", "/resume", "/projects"];
		pages.map((url) => {
			links.push({
				url,
				changefreq: "daily",
				priority: 0.9,
			});
		});

		const projectSlugs = await getProjectSlugs();

		projectSlugs.map((path) => {
			console.log(path);
			links.push({
				url: `/projects/${path}`,
				changefreq: "daily",
				priority: 0.9,
			});
		});

		const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

		res.writeHead(200, {
			"Content-Type": "application/xml",
		});

		const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());

		res.end(xmlString);
	} catch (err) {
		console.log(err);
		res.send(JSON.stringify(err));
	}
}

async function getProjectSlugs() {
	let url = `https://seyon123.github.io/jsons/seyon-dev/projects-all.json`;
	let paths = [];

	const { data } = await axios.get(url);
	paths = data.map((project) => {
		return  project.webName;
	});

	return paths;
}
