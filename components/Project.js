import styles from "../styles/Project.module.css";
import Image from "next/image";
import Link from "next/link";

const Project = ({ name, webName, info, image, demoLink, githubLink, languages, languagesAlt }) => {
	return (
		<div key={name} className={styles["project-cover"]}>
			<div className={styles.project}>
				<div className={styles["info-bg"]}>
					<div className={styles["project-info"]}>
						<h2>{name}</h2>
						<p dangerouslySetInnerHTML={{ __html: info }}></p><p><Link href={`/projects/${webName}`}>See More Info...</Link></p>
						<div className={styles["project-links"]}>
							<div className={styles.btns}>
								{demoLink ? (
									<a href={demoLink} className={styles.demo} aria-label="View Live Demo">
										Live Demo
									</a>
								) : (
									""
								)}
								<a href={githubLink} className={styles.github} aria-label="View Source Code">
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
					<Link href={`/projects/${webName}`} passHref>
						<a>
						<Image className={styles.img} placeholder="blur" blurDataURL={`/assets/projects/${image}`} width="1920" height="1080" alt={image} src={`/assets/projects/${image}`} />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Project;
