import styles from "../styles/Projects.module.css";
import Project from "./Project";
import { ProjectItems } from "./ProjectItems";

const Projects = () => {
	return (
		<section id="projects" className={styles.projects}>
			<h2 className={`header ${styles.header}`}>Projects</h2>

			{ProjectItems.map(({ name, info, image, demoLink, githubLink, languages }) => (
				<Project key={name} name={name} info={info} image={image} demoLink={demoLink} githubLink={githubLink} languages={languages} />
			))}
		</section>
	);
};

export default Projects;
