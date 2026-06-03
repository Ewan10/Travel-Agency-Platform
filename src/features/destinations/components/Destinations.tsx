import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import DestinationCarousel from "./DestinationCarousel";
import styles from './Destinations.module.css';
import layout from '../../../styles/layout.module.css';

export default function Destinations() {
    return (
        <div className={`${styles.destinationsContainer} ${layout.container}`}>
            <SectionTitle>Featured Destinations</SectionTitle>
            <div className={styles.destinationsCarousel}>
                <DestinationCarousel />
            </div>
        </div>
    )
}