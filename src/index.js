import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "react-notifications-component";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorkerRegistration.register({
	onUpdate: (registration) => {
		const waitingServiceWorker = registration.waiting;
		if (waitingServiceWorker) {
			waitingServiceWorker.addEventListener("statechange", (event) => {
				if (event.target.state === "activated") {
					store.addNotification({
						title: "New Version Found",
						message: "There is a new version available. Please refresh the page to update.",
						type: "info",
						insert: "top",
						container: "top-right",
						animationIn: ["animate__animated", "animate__fadeIn"],
						animationOut: ["animate__animated", "animate__fadeOut"],
					})
				}
			});
			waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
		}
	},
});
