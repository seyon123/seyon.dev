import styles from "../styles/Skills.module.css";

const Skills = () => {
	return (
		<section id="skills" className={styles.skills}>
			<h2 className={`header ${styles["header"]}`}>My Skills</h2>
			<div className={styles["skills-icons"]}>
				<i className={`fab fa-react ${styles["skill-icon"]} ${styles.fab}`}></i>
				<i className={`fab fa-html5 ${styles["skill-icon"]} ${styles.fab}`}></i>
				<i className={`fab fa-css3 ${styles["skill-icon"]} ${styles.fab}`}></i>
				<i className={`fab fa-js ${styles["skill-icon"]} ${styles.fab}`}></i>
				<i className={`fab fa-java ${styles["skill-icon"]} ${styles.fab}`}></i>
				<i className={`fab fa-python ${styles["skill-icon"]} ${styles.fab}`}></i>
			</div>
			<div className={styles["skills-bg-text"]}>
				<div className={styles["skills-bg-text-inner"]}>
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
};

export default Skills;
