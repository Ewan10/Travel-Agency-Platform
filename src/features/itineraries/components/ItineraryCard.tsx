import type { Itinerary } from "../types/itinerary.types";
import styles from './ItineraryCard.module.css';

function ItineraryCard(props: { itinerary: Itinerary }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={props.itinerary.image} alt={props.itinerary.title} />
      </div>
      <div className={styles.textWrapper}>
        <h3>{props.itinerary.title}</h3>
        <p>{props.itinerary.description}</p>
      </div>

    </div>
  );
}
export default ItineraryCard;