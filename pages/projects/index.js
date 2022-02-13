import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Projects from "../../components/Projects";
import styles from "../../styles/Home.module.css";
import MetaTags from "../../components/MetaTags";

export default function Home({projects}) {
	return (
        <div className={styles.content}>
            <MetaTags title="Projects - Seyon Rajagopal" description="A collection of my past and current creative work from the last few years."/>
			<Projects projectItems={projects}/>
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
			projects
		},
	};
}
