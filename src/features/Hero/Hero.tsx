import styles from "./Hero.module.css";

export default function Hero() {
    return (
            <div className={styles.hero}>

            <div className={styles.heroImage}></div>

            <div className={styles.overlay}></div>

            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    Welcome to Borcelle Travel Agency!
                </h1>

                <p className={styles.heroSubtitle}>
                    Your adventure starts here. Explore the world with us.
                </p>
            </div>
            </div>
        
    );
}