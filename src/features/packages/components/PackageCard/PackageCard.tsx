import type { TravelPackage } from '../../types/package.types';
import styles from './PackageCard.module.css';

function PackageCard({ travelPackage }: { travelPackage: TravelPackage }) {
    // const { package: pkg } = props;
    const pkg = travelPackage;
    return (
        <article className={styles.packageCard}>
            <div className={styles.packageContent}>
                <div className={styles.imageWrapper}>
                    <img src={pkg.imageUrl} alt={pkg.title} className={styles.packageImage} />
                </div>
                <h3 className={styles.packageTitle}>{pkg.title}</h3>
                <div className={styles.packageDetails}>
                    <p><strong>Destination:</strong> {pkg.destination}</p>
                    <ul>
                        <li><strong>Duration:</strong> {pkg.duration}</li>
                        <li><strong>Difficulty:</strong> {pkg.difficulty}</li>
                        <li><strong>Rating:</strong> {pkg.rating}</li>
                    </ul>
                    <p><strong>Price:</strong> ${pkg.price}</p>
                </div>
                <button className={styles.bookButton}>Book Now</button>
            </div>
        </article>
    );
}
export default PackageCard;