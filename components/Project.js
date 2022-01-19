import styles from "../styles/Project.module.css";
import Image from "next/image";

const Project = ({ name, info, image, demoLink, githubLink, languages, languagesAlt }) => {
	return (
		<div key={name} className={styles["project-cover"]}>
			<div className={styles.project}>
				<div className={styles["info-bg"]}>
					<div className={styles["project-info"]}>
						<h2>{name}</h2>
						<p dangerouslySetInnerHTML={{ __html: info }}></p>
						<div className={styles["project-links"]}>
							<div className={styles.btns}>
								{demoLink ? (
									<a href={demoLink} className={styles.demo} target="_blank" aria-label="View Live Demo" rel="noopener noreferrer">
										Live Demo
									</a>
								) : (
									""
								)}
								<a href={githubLink} target="_blank" className={styles.github} aria-label="View Source Code" rel="noopener noreferrer">
									<i className="fab fa-github"></i>
								</a>
							</div>
							<div className={styles.languages}>
								{languages.map((language, i) => (
									<i key={i} title={languagesAlt[i]} className={`fab ${language}`}></i>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className={styles["img-container"]}>
					<Image className={styles.img} placeholder="blur" blurDataURL={`/assets/projects/${image}`} width="1920" height="1080" alt={image} src={`/assets/projects/${image}`}/>
				</div>
			</div>
		</div>
	);
};

export default Project;
