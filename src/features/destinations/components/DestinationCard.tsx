 import styles from './DestinationsCard.module.css';
 
 function DestinationCard(props: { title: any; country: any; image: any; rating: any; }) {
    const { title, country, image, rating } = props;

    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h3>{title}</h3>
                <p>{country}</p>
                <p>Rating: {rating}</p>
            </div>
        </div>
    );
}

export default DestinationCard;