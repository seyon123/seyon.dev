import React, { useState } from "react";
import "./Header.css";
import { Button } from "./Button";
import Dropdown from "./Dropdown";
import { Link as ExternalLink} from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(true);
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
		<>
			<nav className="navbar">
				<ExternalLink to="/" className="navbar-logo" onClick={scrollToTop}>
					<img className="logo-img" src={require("../assets/logo.gif")} alt="logo"/>
				</ExternalLink>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link activeClass="nav-links-active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="nav-links" onClick={closeMobileMenu}>
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link activeClass="nav-links-active" to="about" spy={true} smooth={true} offset={-100} duration={500} className="nav-links" onClick={closeMobileMenu}>
							About Me
						</Link>
					</li>
					<li className="nav-item">
						<Link activeClass="nav-links-active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="nav-links" onClick={closeMobileMenu}>
							Skills
						</Link>
					</li>
					<li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
						<Link activeClass="nav-links-active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className="nav-links" onClick={closeMobileMenu}>
							Projects <i className="fas fa-caret-down" />
						</Link>
						{dropdown && <Dropdown />}
					</li>
					<li className="nav-item">
						<Link activeClass="nav-links-active" to="contact" className="nav-links" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMobileMenu}>
							Contact Me
						</Link>
					</li>
					<li className="nav-item">
						<a href="https://seyonrajagopal.ca/resume" target="_blank" rel="noreferrer" className="nav-links" onClick={closeMobileMenu}>
							Resume
						</a>
					</li>
				</ul>
				<Button />
			</nav>
		</>
	);
};
export default Header;
