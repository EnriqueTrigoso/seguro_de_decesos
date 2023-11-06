import AngleDown from "components/Icons/AngleDown";
import AngleUp from "components/Icons/AngleUp";
import { Title18 } from "components/UI/Tags/Titles";
import { useState } from "react";
import styles from "./FaqCard.module.css";

const FaqCard = ({ title, content, greenBackground }) => {
  const [openAcordion, setOpenAcordion] = useState(false);

  return (
    <div
      className={`${styles.faq_card} ${
        greenBackground && styles.greenBackground
      }`}
      onClick={() => {
        setOpenAcordion((prev) => !prev);
      }}
    >
      <div className={styles.top_card}>
        <h3 className={styles.h4}>{title}</h3>

        {openAcordion ? <AngleUp /> : <AngleDown />}
      </div>

      {openAcordion && (
        <div className={styles.content}>
          <p className={styles.p}>{content}</p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
