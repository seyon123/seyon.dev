import React from "react";
import Project from "./Project";
import {ProjectItems} from "./ProjectItems";
import "./Projects.css";

function Projects() {
	return (
		<section id="projects">
			<h2 className="header">Projects</h2>

			{ProjectItems.map(({ name, info, image, demoLink, githubLink, languages }) => (
				<Project key={name} name={name} info={info} image={image} demoLink={demoLink} githubLink={githubLink} languages={languages} />
			))}
		</section>
	);
}

export default Projects;
