import React, { useEffect, useState } from "react";
import Project from "./Project";
import axios from "axios";

import "./Projects.css";

function Projects() {
	const [projects, setProjects] = useState([]);

	const fetchProjects = async () => {
		let url = `https://seyon123.github.io/jsons/seyon-dev/projects.json`;
		try {
			const { data } = await axios.get(url);

			setProjects(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProjects();
	}, []);

	return (
		<section id="projects">
			<h2 className="header">Projects</h2>

			{projects.map(({ name, info, image, demoLink, githubLink, languages }) => (
				<Project key={name} name={name} info={info} image={image} demoLink={demoLink} githubLink={githubLink} languages={languages} />
			))}
		</section>
	);
}

export default Projects;
