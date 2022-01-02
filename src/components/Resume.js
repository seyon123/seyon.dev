import React, { useEffect } from "react";
import ViewSDKClient from "./ViewSDKClient";
import MetaTags from "./MetaTags";
import "./Resume.css";

function Resume() {
	useEffect(() => {
		document.title = "Resume - Seyon Rajagopal";
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
			<MetaTags title="Resume - Seyon Rajagopal" description="Hello! My name is Seyon Rajagopal. View My Resume!"/>
		</div>
	);
}

export default Resume;
