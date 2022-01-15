import styles from "../styles/Resume.module.css";
import React, { useEffect } from "react";
import ViewSDKClient from "../components/ViewSDKClient";
import MetaTags from "../components/MetaTags";


const Resume = () => {
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
		<div id="resume" className={styles.resume}>
			<MetaTags title="Resume - Seyon Rajagopal" description="Hello! My name is Seyon Rajagopal. View My Resume!"/>
		</div>
	);
}

export default Resume;