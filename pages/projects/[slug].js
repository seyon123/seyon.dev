import { useRouter } from "next/router";
import axios from "axios";
import styles from "../../styles/Home.module.css";

export default function ProjectDetails({projectItem}) {
    const router = useRouter();

    console.log(projectItem);

	return (
		<div className={styles.content}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1> {projectItem.name} </h1>
		</div>
	);
}

export async function getStaticProps({ params }) {
	let url = `https://seyon123.github.io/jsons/seyon-dev/projects-all.json`;
	let projectItem = [];

	try {
		const { data } = await axios.get(url);
		projectItem = data.find(({webName}) => webName === params.slug);
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			projectItem,
		},
	};
}

export async function getStaticPaths() {
	let url = `https://seyon123.github.io/jsons/seyon-dev/projects-all.json`;
	let paths = []

    const { data } = await axios.get(url);
    paths = data.map(project => { return { params: { slug: project.webName } } });

	return {
		paths,
        fallback: false

	};
}


