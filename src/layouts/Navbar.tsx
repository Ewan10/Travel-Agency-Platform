import logo from "../assets/TravelLogo.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="logo" width="92" height="90" />
                </div>
                <h1 className={styles.navbar__header}>
                    <span className={styles.h1__1}>Borcelle</span>
                    <span className={styles.h1__2}>Travel Agency</span>
                </h1>
             </div>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>
                        <a className={styles.navbar__link} href="/">Destinations</a>
                    </li>
                    <li className={styles.navbar__item}>
                        <a className={styles.navbar__link} href="/about">Packages</a>
                    </li>
                    <li className={styles.navbar__item}>
                        <a className={styles.navbar__link} href="/services">Itineraries</a>
                    </li>
                    <li className={styles.navbar__item}>
                        <a className={styles.navbar__link} href="/contact">Reviews</a>
                    </li>
                    <li className={styles.navbar__item}>
                        <a className={styles.navbar__link} href="/about">About</a>
                    </li>
                </ul>
           <div className={styles.authentication}>
                <button className={styles.navbar__button}>Login</button>
                <button className={styles.navbar__button}>Sign Up</button>
            </div>
        </nav>
    );
}