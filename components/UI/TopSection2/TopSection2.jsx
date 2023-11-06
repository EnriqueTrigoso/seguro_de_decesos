import styles from "./TopSection2.module.css";
import { processBoldTextMod } from "utils/functions";

const TopSection2 = ({ title, description }) => {
  return (
    <div className={styles.topsection2}>
      <h2 className={styles.h2}>{processBoldTextMod(title, { color: "#00983A" })}</h2>
      <p className={styles.p}>{description}</p>
    </div>
  );
};

export default TopSection2;
