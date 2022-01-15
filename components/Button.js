import styles from "../styles/Button.module.css";
import React, { useState, useEffect } from "react";

const Button = () => {
	const [theme, setTheme] = useState();

    const changeTheme = () => {
        setTheme(!theme);
        document.querySelector("body").classList.toggle("light");
    }

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if(localTheme === "light") {
            setTheme(true);
        }else {
            setTheme(false);
        }
    }, []);

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        document.querySelector("body").classList.add(localTheme);
        if(theme === true) {
            document.querySelector("body").classList.add("light");
            localStorage.setItem("theme", "light");
        }
        else {
            document.querySelector("body").classList.remove("light"); 
            localStorage.clear();
        }
        
        
    }, [theme]);

	return (
		<button onClick={changeTheme} className={styles.btn}>
			{theme ? <i className="fas fa-moon" /> : <i className="fas fa-sun" />}
		</button>
	);
}

export default Button;