import React from "react";

import "./Skills.css";

function Skills() {
	return (
		<section id="skills">
			<h2 className="header">My Skills</h2>
			<div className="skills-icons">
				<i className="fab fa-react"></i>
                <i className="fab fa-html5"></i>
				<i className="fab fa-css3"></i>
				<i className="fab fa-js"></i>
				<i className="fab fa-java"></i>
				<i className="fab fa-python"></i>
			</div>
			<div className="skills-bg-text">
				<div className="skills-bg-text-inner">
					<p>HTML</p>
					<p>Javascript</p>
					<p>CSS3</p>
					<p>Git</p>
					<p>Python</p>
					<p>Java</p>
					<p>C</p>
					<p>Unix/Bash</p>
					<p>PHP</p>
				</div>
			</div>
		</section>
	);
}

export default Skills;
