import React, { useEffect } from "react";
import ViewSDKClient from "./ViewSDKClient";
import "./Resume.css";
import HelmetMetaData from "./HelmetMetaData";

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
            <HelmetMetaData title="Seyon Rajagopal | Resume" description="Take a look at my Resume!"/>
		</div>
	);
}

export default Resume;
