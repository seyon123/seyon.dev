import React from "react";

import "./Project.css";

function Project({ name, info, image, demoLink, githubLink, languages }) {
	return (
		<div key={name} className="project-cover">
			<div className="project">
				<div className="info-bg">
					<div className="project-info">
						<h2>{name}</h2>
						<p dangerouslySetInnerHTML={{ __html: info }}></p>
						<div className="project-links">
							<div className="btns">
								{demoLink ? (
									<a href={demoLink} className="demo" target="_blank" rel="noopener noreferrer">
										Live Demo
									</a>
								) : (
									""
								)}
								<a href={githubLink} target="_blank" className="github" rel="noopener noreferrer">
									<i className="fab fa-github"></i>
								</a>
							</div>
							<div className="languages">
								{languages.map((language, i) => (
									<i key={i} className={`fab ${language}`}></i>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="img-container">
					<img className="img" alt={image} src={require(`../assets/projects/${image}`)}></img>
				</div>
			</div>
		</div>
	);
}

export default Project;
