import styles from "../styles/Projects.module.css";
import Project from "./Project";

const Projects = ( {projectItems} ) => {
	return (
		<section id="projects" className={styles.projects}>
			<h2 className={`header ${styles.header}`}>Projects</h2>

			{projectItems?.map(({ name, info, image, demoLink, githubLink, languages, languagesAlt }) => (
				<Project key={name} name={name} info={info} image={image} demoLink={demoLink} githubLink={githubLink} languages={languages} languagesAlt={languagesAlt}/>
			))}
		</section>
	);
};

export default Projects;
