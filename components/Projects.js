import styles from "../styles/Projects.module.css";
import Project from "./Project";

const Projects = ({ projectItems, limit }) => {
	return (
		<section id="projects" className={styles.projects}>
			<h2 className={`header ${styles.header}`}>Projects</h2>

			{projectItems.slice(0, limit).map(({ slug, frontmatter }) => (
				<Project
					key={slug}
					webName={slug}
					name={frontmatter.name}
					info={frontmatter.info}
					image={frontmatter.coverImage}
					demoLink={frontmatter.demoLink}
					githubLink={frontmatter.githubLink}
					languages={frontmatter.languages}
					languagesAlt={frontmatter.languagesAlt}
				/>
			))}
		</section>
	);
};

export default Projects;
