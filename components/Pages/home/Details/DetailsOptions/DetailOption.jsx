import styles from "./DetailOption.module.css";
import { processBoldTextMod } from "utils/functions";

const DetailOption = ({ number, title, icon, line = true }) => {
  return (
    <div className={styles.detail_option}>
      <span className={styles.circle}>{icon}</span>
      <div className={styles.subtitle_container}>
        <p className={styles.title}>{processBoldTextMod(title, { fontWeight: "700" })}</p>
      </div>
    </div>
  );
};

export default DetailOption;
