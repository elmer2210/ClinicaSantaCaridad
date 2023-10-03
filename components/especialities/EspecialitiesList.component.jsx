import styles from '@/assets/css/EspecialitiesList.module.css';
import {FaHandHoldingMedical} from 'react-icons/fa'

const EspecialitiesListComponent = ({image, title, description, link}) => {
    return(
        <div className={styles.card}>
            <FaHandHoldingMedical className={styles.cardImage} />
            <div className={styles.cardInfo}>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={link}>Leer más</a>
            </div>
        </div>
    );
};

export default EspecialitiesListComponent; 