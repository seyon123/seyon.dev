import React, { useState } from 'react';
import "./Header.css";
import { Button } from './Button';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

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

	return (
		<>
			<nav className="navbar">
				<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
					<img className='logo-img' src={ require('../assets/logo.gif')}/>
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Home
						</Link>
					</li>
					<li className="nav-item" >
						<Link to="/about" className="nav-links" onClick={closeMobileMenu}>
							About Me
						</Link>
						
					</li>
                    <li className="nav-item">
						<Link to="/skills" className="nav-links" onClick={closeMobileMenu}>
							Skills
						</Link>
					</li>
					<li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
						<Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
							Projects <i className="fas fa-caret-down" />
						</Link>
                        {dropdown && <Dropdown />}
					</li>
					<li className="nav-item">
						<Link to="/contact-me" className="nav-links" onClick={closeMobileMenu}>
							Contact Me
						</Link>
					</li>
                    <li className="nav-item">
						<Link to="https://seyonrajagopal.ca/resume" className="nav-links" onClick={closeMobileMenu}>
							Resume
						</Link>
					</li>
				</ul>
				<Button />
			</nav>
		</>
	);
};
export default Header;
