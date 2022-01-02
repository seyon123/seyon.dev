import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function MetaTags(props) {
	let location = useLocation();
	let currentUrl = "https://seyon.dev" + location.pathname;
	let title = props.title !== undefined ? props.title : "Seyon Rajagopal";
	let image = props.image !== undefined ? props.image : "https://seyon.dev/pic-background.jpg";
	let description =
		props.description !== undefined
			? props.description
			: "Hello! My name is Seyon Rajagopal, and I am a Computer Science Co-op student at Ryerson University. I build, design and develop websites and applications.";	return (
		<Helmet prioritizeSeoTags>
			<title>{title}</title>
            <link rel="canonical" href={currentUrl}/>
			
            <meta property="title" content={title} />
			<meta name="description" content={description} />
			<meta property="image" content={image} />
            <meta property="type" content="website" />
			<meta property="url" content={currentUrl} />
            {/* Open Graph / Facebook  */}
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:image" content={image} />
			<meta property="og:url" content={currentUrl} />
			<meta property="og:site_name" content="Seyon Rajagopal" />
			<meta property="og:description" content={description} />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
		</Helmet>
	);
}