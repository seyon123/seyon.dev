import About from "../components/About";
import Contact from "../components/Contact";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import MoreProjectsBtn from "../components/MoreProjectsBtn";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home({ projects }) {

	return (
		<div className={styles.content}>
			<Profile />
			<About />
			<Skills />
			<Projects projectItems={projects}/>
			<MoreProjectsBtn />
			<Contact />
		</div>
	);
}

export async function getStaticProps() {
	// Get files from the projects dir
	const files = fs.readdirSync(path.join("projects"));

	// Get slug and frontmatter from projects
	const projects = files.map((filename) => {
		// Create slug
		const slug = filename.replace(".md", "");

		// Get frontmatter
		const markdownWithMeta = fs.readFileSync(path.join("projects", filename), "utf-8");

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			projects: projects.filter(project => project.frontmatter.featured === true)
		},
	};
}
