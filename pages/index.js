import About from "../components/About";
import Contact from "../components/Contact";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";


export default function Home() {
	return (
		<div className={styles.content}>
      
			<Profile />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
