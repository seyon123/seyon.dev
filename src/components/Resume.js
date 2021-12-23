import React, { useEffect } from "react";
import ViewSDKClient from "./ViewSDKClient";
import { Helmet } from "react-helmet";
import "./Resume.css";

function Resume() {
	useEffect(() => {
		document.title = "Seyon Rajagopal | Resu";
		const viewSDKClient = new ViewSDKClient();
		viewSDKClient.ready().then(() => {
			viewSDKClient.previewFile("resume", {
				showAnnotationTools: false,
				dockPageControls: false,
			});
		});
	});
	return (
		<div id="resume">
			<Helmet>
				<meta charSet="utf-8" />

                <title>Seyon Rajagopal | Resume</title>
                <meta name="description" content="Take a look at my Resume!" />
                
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://seyon.dev/" />
				<meta property="og:title" content="Seyon Rajagopal | Resume" />
				<meta property="og:description" content="Take a look at my Resume!" />
				<meta property="og:image" content="https://seyon.dev/pic-background.jpg" />
				<meta property="og:site_name" content="Seyon Rajagopal" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://seyon.dev/" />
				<meta property="twitter:title" content="Seyon Rajagopal | Resume" />
				<meta property="twitter:description" content="Take a look at my Resume!" />
				<meta property="twitter:image" content="https://seyon.dev/pic-background.jpg" />
			</Helmet>
		</div>
	);
}

export default Resume;
