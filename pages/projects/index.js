import Projects from "../../components/Projects";
import styles from "../../styles/Home.module.css";
import MetaTags from "../../components/MetaTags";
import axios from "axios";

export default function Home({ projectItems }) {
	return (
		<div className={styles.content}>
            <MetaTags title="Projects - Seyon Rajagopal" description="A collection of my past and current creative work from the last few years."/>
			<Projects projectItems={projectItems}/>
		</div>
	);
}

export async function getStaticProps() {
	let url = `https://seyon123.github.io/jsons/seyon-dev/projects-all.json`;
	let projectItems = {};
	try {
		const { data } = await axios.get(url);
		projectItems = data;
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			projectItems,
		},
	};
}
