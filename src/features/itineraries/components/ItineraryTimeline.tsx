import Itineraries  from '../data/itineraries';
import type { Itinerary } from '../types/itinerary.types';
import ItineraryCard from './ItineraryCard';
import styles from './ItineraryTimeline.module.css';

function ItineraryTimeline() {
  return (
     <div className={styles.timeline}>
        {
            Itineraries.map((itinerary: Itinerary) => (
            <ItineraryCard key={itinerary.id} itinerary={itinerary} />
            ))
        }
     </div>
    );
}
export default ItineraryTimeline;