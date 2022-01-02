import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MetaTags from "./MetaTags";
import "./Error404.css";

function Error404() {
	useEffect(() => {
		document.title = "Error 404 - Seyon Rajagopal";
	});
	return (
		<div className="error-container">
			<MetaTags title="404 - Seyon Rajagopal" description="This page does not exist."/>
			<h1 className="error-num">404</h1>
            <h2 className="error-message">OOPS! PAGE NOT FOUND</h2>
            <h3 className="error-sub-message">Sorry but the page you are looking for does not exist, has been removed, or is temporarily unavailable</h3>
            <Link className="error-btn" to="/">Back to Home Page</Link>
		</div>
	);
}

export default Error404;
