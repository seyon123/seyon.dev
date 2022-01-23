import styles from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.social}>
				<a href="http://github.com/seyon123" aria-label="Github">
					<i className="fab fa-github"></i>
				</a>
				<a href="http://instagram.com/seyon100" aria-label="Instagram">
					<i className="fab fa-instagram"></i>
				</a>
				<a href="https://www.linkedin.com/in/seyon-rajagopal/" aria-label="Linkedin">
					<i className="fab fa-linkedin"></i>
				</a>
				<a href="mailto:hello@seyon.dev" aria-label="Mail hello@seyon.dev">
					<i className="fas fa-envelope"></i>
				</a>
			</div>
			<p>
				Built with <a href="https://nextjs.org">Next.js</a>, <a href="https://reactjs.org/">React</a> and <a href="https://vercel.com">Vercel</a>.		
				<br />
				Seyon Rajagopal © 2022
			</p>
		</footer>
	);
};

export default Footer;
