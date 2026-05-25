import type { Review } from '../types/reviews.types';
import styles from './ReviewCard.module.css';
import { Star } from "lucide-react";

function ReviewCard({ review }: { review: Review }) {
    return (
        <div className={styles.reviewCard}>
            <div className={styles.avatarContainer}>
                <img src={review.avatarUrl} alt={review.username} className={styles.avatar} />
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.username}>{review.username}</h3>
                    <p className={styles.destination}>
                        {review.destination}
                    </p>
                </div>
                <p className={styles.reviewText}>
                    {review.reviewText}
                </p>
                <div className={styles.rating}>
                    {Array.from({ length: review.rating }).map((_, index) => (
                        <Star key={index} className={styles.star} />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ReviewCard;