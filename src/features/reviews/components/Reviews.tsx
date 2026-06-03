import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { reviews } from "../data/reviews";
import ReviewCard from "./ReviewCard";
import styles from "./Reviews.module.css";
import layout from "../../../styles/layout.module.css";

function Reviews() {
    return (
        <div className={`${layout.vertSpacing} ${layout.container}`}>
            <SectionTitle>Reviews</SectionTitle>
            <div className={styles.reviewsContainer}>
                        {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
        ))}
            </div>
        </div>
    );
}
export default Reviews;