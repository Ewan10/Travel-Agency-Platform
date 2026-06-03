import ItineraryTimeline from './ItineraryTimeline';
import styles from './ItineraryHighlights.module.css';
import layout from '../../../styles/layout.module.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

function ItineraryHighlights() {
  return (
    <div className={`${styles.container} ${layout.container}`}>
        <SectionTitle>Itinerary Highlights</SectionTitle>
        <div className={styles.timelineWrapper}>
            <ItineraryTimeline />
        </div>
        
    </div>
    );
}
export default ItineraryHighlights;