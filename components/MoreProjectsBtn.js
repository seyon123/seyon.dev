import styles from "../styles/MoreProjectsBtn.module.css";
import Link from "next/link";

const MoreProjectsBtn = () => {
	return (
		<div className={styles.btn}>
			<Link href="/projects">
				<a className={styles.projectsBtn}>
					See More Projects &nbsp;
					<i className="fas fa-arrow-right" />
				</a>
			</Link>
		</div>
	);
};

export default MoreProjectsBtn;
