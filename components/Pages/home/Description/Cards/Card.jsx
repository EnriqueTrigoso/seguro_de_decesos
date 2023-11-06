import Image from "next/image";
import styles from "./Card.module.css";

const Card = ({ img, text, title, alt }) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        <Image src={img} alt={alt} title={title} placeholder="blur" />
      </div>
      <div className={styles.content}>
        <div className={styles.group}>
          <h3 className={styles.h4}>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
