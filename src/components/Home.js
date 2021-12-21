import React from "react";

import "./Home.css";
import { ReactComponent as Triangle } from "../assets/triangle.svg";

function Home() {
	return (
		<section id="home" className="home">
			<Triangle alt="triangle" className="triangle" />
			<div className="content-inner">
				<div className="description">
					<img src={require("../assets/profiles_seyon-min.jpg")} alt="Seyon Rajagopal Profile" className="profile" />
					<p>Hello, I'm</p>
					<h1>SEYON RAJAGOPAL</h1>
					<p className="info">Web Designer, Developer and Programmer</p>
					<div className="social">
						<a href="http://github.com/seyon123" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-github"></i>
						</a>
						<a href="http://instagram.com/seyon100" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="https://www.linkedin.com/in/seyon-rajagopal/" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-linkedin"></i>
						</a>
						<a href="mailto:mail@seyonrajagopal.ca" target="_blank" rel="noopener noreferrer">
							<i className="fas fa-envelope"></i>
						</a>
					</div>
				</div>
				<div className="code">
					<pre id="typewriter" className="class">{`
class Person {
    constructor (name, traits, birthYear) {
        this.name = name;
        this.traits = traits;
        this.age = new Date().getFullYear() - birthYear;
    }
}

const Me = new Person( 'Seyon Rajagopal', ['Designer', 'Developer', 'Programmer'], 2000);  `}</pre>
				</div>
			</div>
			<div className="resume">
				<a className="resumeBtn" href="resume.pdf" target="_blank" rel="noopener noreferrer">
					<i className="far fa-file-pdf"></i> View Resume
				</a>
			</div>
		</section>
	);
}

export default Home;
