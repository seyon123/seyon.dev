import styles from "../styles/Header.module.css";
import React, { useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Link from 'next/link'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useRouter } from 'next/router'


const Header = () => {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	let router = useRouter();

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => {
		if (router.asPath !== "/") {
			router.push("/");
		}
		setClick(false);
	};

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			// setDropdown(true);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};

	const scrollToTop = () => {
		scroll.scrollToTop();
	};
	return (
		<nav className={styles.navbar}>
			<Link href="/"  onClick={scrollToTop} passHref>
				<div className={styles["navbar-logo"]}>SR</div>
			</Link>
			<div className={styles["menu-icon"]} onClick={handleClick}>
				<i className={click ? "fas fa-times" : "fas fa-bars"} />
			</div>
			<ul className={click ? (`${styles["nav-menu"]} ${styles.active}`): styles["nav-menu"]}>
				<li className={styles["nav-item"]}>
					<ScrollLink activeClass={styles["nav-links-active"]} to="home" spy={true} smooth={true} offset={-80} duration={1000} className={styles["nav-links"]} onClick={closeMobileMenu}>
						Home
					</ScrollLink>
				</li>
				<li className={styles["nav-item"]}>
					<ScrollLink activeClass={styles["nav-links-active"]} to="about" spy={true} smooth={true} offset={-30} duration={1000}className={styles["nav-links"]} onClick={closeMobileMenu}>
						About Me
					</ScrollLink>
				</li>
				<li className={styles["nav-item"]}>
					<ScrollLink activeClass={styles["nav-links-active"]} to="skills" spy={true} smooth={true} offset={-30} duration={1000} className={styles["nav-links"]} onClick={closeMobileMenu}>
						Skills
					</ScrollLink>
				</li>
				<li className={styles["nav-item"]} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
					<ScrollLink activeClass={styles["nav-links-active"]} to="projects" spy={true} smooth={true} offset={-30} duration={1000} className={styles["nav-links"]} onClick={closeMobileMenu}>
						Projects {/* {<i className="fas fa-caret-down" />} */}
					</ScrollLink>
					{dropdown && <Dropdown />}
				</li>
				<li className={styles["nav-item"]}>
					<ScrollLink activeClass={styles["nav-links-active"]} to="contact" className={styles["nav-links"]} spy={true} smooth={true} offset={-30} duration={1000} onClick={closeMobileMenu}>
						Contact Me
					</ScrollLink>
				</li>
				<li className={styles["nav-item"]}>
					<Link href="/resume" onClick={closeMobileMenu}>
						<a className={`${styles["nav-links"]} ${styles["nav-links-mobile"]}`}>Resume</a>
					</Link>
				</li>
			</ul>
			<Button />
		</nav>
	);
};

export default Header;
