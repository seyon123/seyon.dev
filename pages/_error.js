import Link from "next/link";
import MetaTags from "../components/MetaTags";
import styles from "../styles/Error.module.css";

function Error({ statusCode, message1, message2 }) {
	return (
		<div className={styles["error-container"]}>
			<MetaTags title={`${statusCode} - Seyon Rajagopal`} description={message1} />
			<h1 className={styles["error-num"]}>{statusCode}</h1>
			<h2 className={styles["error-message"]}>{message1}</h2>
			<h3 className={styles["error-sub-message"]}>{message2}</h3>
			<Link href="/">
				<a className={styles["error-btn"]}>Back to Home Page</a>
			</Link>
		</div>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	var message1 = "";
	var message2 = "";
	if (statusCode === 500) {
		message1 = "OOPS! SERVER ERROR";
		message2 = "Sorry but the server is currently unavailable";
	} else if (statusCode === 403) {
		message1 = "ACCESS DENIED";
		message2 = "Sorry but you don't have permission to access this page";
	} else {
		message1 = "OOPS! UNKNOWN ERROR";
		message2 = "Sorry but an unknown error occurred";
	}
	return { statusCode, message1, message2 };
};

export default Error;
