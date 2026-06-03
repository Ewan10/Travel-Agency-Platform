import styles from './Footer.module.css';
import layout from '../styles/layout.module.css';

function Footer() {
    return (
        <>

            <div className={`${styles.footer} ${layout.container}`}>
                <div className={styles.brand}>
                    <h3 className={styles.footerTitle}>Borcelle Travel Agency</h3>
                    <p className={styles.footerDescription}>
                        Discover extraordinary destinations and
                        carefully crafted travel experiences
                        around the world.
                    </p>
                </div>
                <div className={styles.links}>
                    <nav className={styles.footerNav}>
                        <h3 className={styles.footerNavTitle}>Links</h3>
                        <a className={styles.footerLink} href="/destinations">Destinations</a>
                        <a className={styles.footerLink} href="/packages">Packages</a>
                        <a className={styles.footerLink} href="/itineraries">Itineraries</a>
                        <a className={styles.footerLink} href="/reviews">Reviews</a>
                        <a className={styles.footerLink} href="/about">About us</a>
                    </nav>
                </div>
                <div className={styles.contact}>
                    <address className={styles.footerContact}>
                        <h3 className={styles.footerContactTitle}>Contact Us</h3>
                        <p className={styles.footerContactItem}>Email: <a href="mailto:info@borcelletravel.com">info@borcelletravel.com</a></p>
                        <p className={styles.footerContactItem}>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                        <p className={styles.footerContactItem}>Address: 12 Javelas, Corinth, Greece</p>
                    </address>
                </div>
            </div>
            <div className={styles.copyrightBox}>
                <p className={styles.copyright}>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
            </div>
        </>
    );
}
export default Footer;