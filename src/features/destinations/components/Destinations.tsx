import DestinationCarousel from "./DestinationCarousel";
import styles from './Destinations.module.css';

export default function Destinations() {
    return (
        <div className={styles.destinations__container}>
            <h2 className={styles.destinations__title}>Featured Destinations</h2>
            <div className={styles.destinations__carousel}>
                <DestinationCarousel />
            </div>
        </div>
    )
}