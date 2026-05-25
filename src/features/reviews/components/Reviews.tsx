import { reviews } from "../data/reviews";
import ReviewCard from "./ReviewCard";
import styles from "./Reviews.module.css";

function Reviews() {
    return (
        <div className={styles.reviews}>
            <h2 className={styles.reviewsTitle}>Reviews</h2>
            <div className={styles.reviewsContainer}>
                        {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
        ))}
            </div>
        </div>
    );
}
export default Reviews;