import styles from '../styles/Profile.module.css'
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from 'next/image';
import MetaTags from "./MetaTags";
const Profile = () => {
	return (
		<section id="home" className={styles.home}>
			<MetaTags title="Portfolio - Seyon Rajagopal"/>
			<img src="/assets/triangle.svg" alt="triangle" className={styles.triangle} />
			<div className={styles["content-inner"]}>
				<div className={styles.description}>
					<Image placeholder="blur" blurDataURL="/assets/profiles_seyon-min.jpg" src="/assets/profiles_seyon-min.jpg" width={150} height={150} alt="Seyon Rajagopal Profile" className={styles.profile} />
					<p>Hello, I&apos;m</p>
					<h1>SEYON RAJAGOPAL</h1>
					<p className={styles.info}>Web Designer, Developer and Programmer</p>
					<div className={styles.social}>
						<a href="http://github.com/seyon123" target="_blank" aria-label="Github" rel="noopener">
							<i className="fab fa-github"></i>
						</a>
						<a href="http://instagram.com/seyon100" target="_blank" aria-label="Instagram" rel="noopener">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="https://www.linkedin.com/in/seyon-rajagopal/" target="_blank" aria-label="Linkedin" rel="noopener">
							<i className="fab fa-linkedin"></i>
						</a>
						<a href="mailto:hello@seyon.dev" aria-label="Mail hello@seyon.dev">
							<i className="fas fa-envelope"></i>
						</a>
					</div>
				</div>
				<div className={styles.code}>
					<pre id="typewriter" className={styles.class}>
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

			<div className={styles.resume}>
				<Link href="/resume" >
					<a className={styles.resumeBtn}><i className="far fa-file-pdf"/>View Resume</a>
				</Link>
			</div>
		</section>
	);
};

export default Profile;