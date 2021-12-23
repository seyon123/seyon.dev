import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import { ReactComponent as Triangle } from "../assets/triangle.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {
	return (
		<section id="home" className="home">
			<Helmet>
				<meta charSet="utf-8" />
				<link rel="canonical" href="https://seyon.dev/"/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#8148eb" />

				<title>Seyon Rajagopal | Portfolio</title>
				<meta name="description" content="Hello! My name is Seyon Rajagopal, and I am a Computer Science Co-op student at Ryerson University. I build, design and develop websites and applications." />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://seyon.dev/" />
				<meta property="og:title" content="Seyon Rajagopal | Portfolio" />
				<meta
					property="og:description"
					content="Hello! My name is Seyon Rajagopal, and I am a Computer Science Co-op student at Ryerson University. I build, design and develop websites and applications."
				/>
				<meta property="og:image" content="https://seyon.dev/pic-background.jpg" />
				<meta property="og:site_name" content="Seyon Rajagopal" />
				
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://seyon.dev/" />
				<meta property="twitter:title" content="Seyon Rajagopal | Portfolio" />
				<meta
					property="twitter:description"
					content="Hello! My name is Seyon Rajagopal, and I am a Computer Science Co-op student at Ryerson University. I build, design and develop websites and applications."
				/>
				<meta property="twitter:image" content="https://seyon.dev/pic-background.jpg" />
			</Helmet>
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
					<pre id="typewriter" className="class">
						<Typewriter
							options={{
								autoStart: true,
								loop: false,
								delay: 25,
							}}
							onInit={(typewriter) => {
								typewriter
									.pauseFor(1500)
									.typeString(
										"class <b>Person</b> {<br/>     constructor (name, traits, birthYear) {<br/>     this.name = name;<br/>     this.traits = traits;</br>     this.age = new Date().getFullYear() - birthYear;<br/>     }<br/>}<br/><br/>const Me = new Person( <b>'Seyon Rajagopal'</b>, [<b>'Designer'</b>, '<b>Developer</b>', '<b>Programmer</b>'], <b>2000</b>);"
									)
									.start();
							}}
						/>
					</pre>
				</div>
			</div>

			<div className="resume">
				<Link to="/resume" className="resumeBtn">
					<i className="far fa-file-pdf"></i> View Resume
				</Link>
			</div>
		</section>
	);
}

export default Home;
