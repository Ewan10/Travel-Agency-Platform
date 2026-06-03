import SectionTitle from "../../components/SectionTitle/SectionTitle";
import layouts from "../../styles/layout.module.css";
import styles from "./Newsletter.module.css";

function Newsletter() {
    return (
        <div className={`${layouts.container} ${styles.container}`}>
            <SectionTitle>Ready for Your Next Adventure?</SectionTitle>
            <p className={styles.description}>
                Subscribe to receive travel inspiration,
                exclusive deals and destination guides to your inbox!
            </p>
            <form className={styles.form}>
                <input className={styles.input} type="email" placeholder="Enter your email" required />
                <button className={styles.submitBtn} type="submit">Subscribe</button>
            </form>
        </div>
    );
}
export default Newsletter;