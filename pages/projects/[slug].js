import Image from "next/image";
import MetaTags from "../../components/MetaTags";
import styles from "../../styles/ProjectItem.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default function ProjectDetails({ frontmatter: {name, info, coverImage, demoLink, githubLink, languages, languagesAlt}, content }) {
	return (
		<div className={styles.content}>
			<MetaTags title={`${name} - Seyon Rajagopal`} description={info} image={coverImage} />
			<h1> {name} </h1>
			<div className={styles["project-cover"]}>
				<div className={styles.project}>
					<div className={styles["img-container"]}>
						<Image className={styles.img} placeholder="blur" blurDataURL={coverImage} width="1920" height="1080" alt={name} src={coverImage} />
					</div>
					<div className={styles["info-bg"]}>
						<div className={styles["project-info"]}>
							<div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
						</div>
					</div>
					<div className={styles["info-bg"]}>
						<div className={styles["project-info"]}>
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
				</div>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("projects"));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".md", ""),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(path.join("projects", slug + ".md"), "utf-8");

	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			frontmatter,
			slug,
			content,
		},
	};
}
