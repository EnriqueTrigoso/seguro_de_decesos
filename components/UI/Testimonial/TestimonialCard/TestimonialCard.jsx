import Image from "next/image";
import styles from "./TestimonialCard.module.css";
import { Title18 } from "components/UI/Tags/Titles";
import { Text16 } from "components/UI/Tags/Texts";
import Stars from "components/UI/Stars/Stars";

const TestimonialCard = ({
  img,
  alt,
  title,
  name,
  occupation,
  description,
  star,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <Image className={styles.author} src={img} alt={alt} title={title} />

        <div className={styles.name_container}>
          <Title18>{name}</Title18>
          <p className={styles.occupation}>{occupation}</p>
        </div>

        <Stars count={5} width={12} height={12} rounded />
      </div>

      <Text16>{description}</Text16>
    </div>
  );
};

export default TestimonialCard;
