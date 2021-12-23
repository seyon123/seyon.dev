import React, { useEffect } from "react";
import ViewSDKClient from "./ViewSDKClient";
import "./Resume.css";

function Resume() {
	useEffect(() => {
		document.title = "Resume | Seyon Rajagopal";
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
		</div>
	);
}

export default Resume;
