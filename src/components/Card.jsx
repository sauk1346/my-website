
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Card.module.css';

export function Card({ title, description, image, link }) {
  return (
    <Link href={link}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.cardImage}>
            <Image
              src={image}
              alt={title}
              width={200}  
              height={200}  
              style={{objectFit:"cover"}}  
              className={styles.cardImageImg}
            />
          </div>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </Link>
  );
}
