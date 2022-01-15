import styles from "../styles/Dropdown.module.css";
import { MenuItems } from "./MenuItems";
import React, { useState } from "react";
import Link from "next/link";
const Dropdown = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	return (
		<ul onClick={handleClick} className={click ? `${styles["dropdown-menu"]} ${styles.clicked}` : styles["dropdown-menu"]}>
			{MenuItems.map((item, index) => {
				return (
					<li key={index}>
						<Link className={styles["dropdown-link"]} href={item.path} onClick={() => setClick(false)}>
							{item.title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Dropdown;
