import Head from "next/head";
import { useRouter } from "next/router";

const MetaTags = (props) => {
	let router = useRouter();
	let currentUrl = "https://seyon.dev" + router.asPath;
	let title = props.title !== undefined ? props.title : "Seyon Rajagopal";
	let image = props.image !== undefined ? props.image : "/assets/pic-background.jpg";
	let description =
		props.description !== undefined
			? props.description
			: "Hello! My name is Seyon Rajagopal, and I am a Computer Science Co-op student at Ryerson University. I build, design and develop websites and applications.";
	return (
		<Head>
			<title>{title}</title>
			<link rel="canonical" href={currentUrl} />
			<link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="mask-icon" href="/assets/icons/safari-pinned-tab.svg" color="#603cba" />
			<meta name="msapplication-TileColor" content="#603cba" />
			<meta name="theme-color" content="#603cba" />

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
		</Head>
	);
};

export default MetaTags;
