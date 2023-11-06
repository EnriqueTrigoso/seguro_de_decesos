import Spot from "components/Icons/Spot";
import styles from "./Modality.module.css";
import { Title30 } from "components/UI/Tags/Titles";

const Modality2 = ({ content }) => {
  return (
    <div className={styles.modality_container}>
      <div className={styles.title_container}>
        <Spot />
        <Title30>{content.title}</Title30>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.description_container}>{content.description}</div>

      <p className={styles.subtitle}>{content.contact_text}</p>
    </div>
  );
};

export default Modality2;
