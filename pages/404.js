import Link from "next/link";
import MetaTags from "../components/MetaTags";
import styles from "../styles/Error.module.css";

function Error404() {
	return (
		<div className={styles["error-container"]}>
			<MetaTags title={`404 - Seyon Rajagopal`} description="OOPS! PAGE NOT FOUND" />
			<h1 className={styles["error-num"]}>404</h1>
			<h2 className={styles["error-message"]}>OOPS! PAGE NOT FOUND</h2>
			<h3 className={styles["error-sub-message"]}>Sorry but the page you are looking for does not exist, has been removed, or is temporarily unavailable</h3>
			<Link href="/">
				<a className={styles["error-btn"]}>Back to Home Page</a>
			</Link>
		</div>
	);
}

export default Error404;
