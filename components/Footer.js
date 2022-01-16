import styles from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
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
			<p>
				Made with ❤ by
				<a href="https://github.com/seyon123" target="_blank" rel="noopener noreferrer">
					{" "}
					Seyon Rajagopal{" "}
				</a>
				<br />
				Copyright © 2022 Seyon Rajagopal
			</p>
		</footer>
	);
};

export default Footer;
