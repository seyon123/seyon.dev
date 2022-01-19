import About from "../components/About";
import Contact from "../components/Contact";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import MoreProjectsBtn from "../components/MoreProjectsBtn";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home({ projectItems }) {

	return (
		<div className={styles.content}>
			<Profile />
			<About />
			<Skills />
			<Projects projectItems={projectItems}/>
			<MoreProjectsBtn />
			<Contact />
		</div>
	);
}

export async function getStaticProps() {
	let url = `https://seyon123.github.io/jsons/seyon-dev/projects.json`;
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
