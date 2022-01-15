import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>            
            <p>
                Made with ❤ by
                <a
                    href="https://github.com/seyon123"
                    target="_blank"
                    rel="noopener noreferrer"
                > Seyon Rajagopal </a>
                <br/>
                Copyright © 2022 Seyon Rajagopal
            </p>
        </footer>
    );
};

export default Footer;