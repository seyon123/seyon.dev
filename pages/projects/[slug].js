import { useRouter } from "next/router";
import Image from "next/image";
import MetaTags from "../../components/MetaTags";
import axios from "axios";
import styles from "../../styles/ProjectItem.module.css";


export default function ProjectDetails({ projectItem }) {
	return (
		<div className={styles.content}>
			<MetaTags title={`${projectItem.name} - Seyon Rajagopal`} description={projectItem.infoAlt} image={`/assets/projects/${projectItem.image}`} />
			<h1> {projectItem.name} </h1>
			<div className={styles["project-cover"]}>
				<div className={styles.project}>
					<div className={styles["info-bg"]}>
						<div className={styles["project-info"]}>

							<p dangerouslySetInnerHTML={{ __html: projectItem.info }}></p>
							<div className={styles["project-links"]}>
								<div className={styles.btns}>
									{projectItem.demoLink ? (
										<a href={projectItem.demoLink} className={styles.demo} target="_blank" aria-label="View Live Demo" rel="noopener noreferrer">
											Live Demo
										</a>
									) : (
										""
									)}
									<a href={projectItem.githubLink} target="_blank" className={styles.github} aria-label="View Source Code" rel="noopener noreferrer">
										<i className="fab fa-github"></i>
									</a>
								</div>
								<div className={styles.languages}>
									{projectItem.languages.map((language, i) => (
										<i key={i} title={projectItem.languagesAlt[i]} className={`fab ${language}`}></i>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className={styles["img-container"]}>
						<Image className={styles.img} placeholder="blur" blurDataURL={`/assets/projects/${projectItem.image}`} width="1920" height="1080" alt={projectItem.name} src={`/assets/projects/${projectItem.image}`} />
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps({ params }) {
	let url = `https://seyon123.github.io/jsons/seyon-dev/projects-all.json`;
	let projectItem = [];

	try {
		const { data } = await axios.get(url);
		projectItem = data.find(({ webName }) => webName === params.slug);
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			projectItem,
		},
	};
}

export async function getStaticPaths() {
	let url = `https://seyon123.github.io/jsons/seyon-dev/projects-all.json`;
	let paths = [];

	const { data } = await axios.get(url);
	paths = data.map((project) => {
		return { params: { slug: project.webName } };
	});

	return {
		paths,
		fallback: false,
	};
}
