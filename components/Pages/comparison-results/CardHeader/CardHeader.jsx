import { Title16 } from "components/UI/Tags/Titles";
import styles from "./CardHeader.module.css";
import { PhoneActive } from "components/Icons";
import useText from "contexts/TextContext/useText";

const CardHeader = () => {
  const { CardHeaderText } = useText();

  return (
    <div className={styles.card_header}>
      <div>
        <h2 className={styles.h2}>{CardHeaderText.columns[0]}</h2>
      </div>

      <div className={styles.center}>
        <h2 className={styles.h2}>{CardHeaderText.columns[1]}</h2>
      </div>

      <div className={styles.padding}>
        <h2 className={styles.h2}>{CardHeaderText.columns[2]}</h2>
      </div>

      <div className={styles.phone_button}>
        <span className={styles.circle}>
          <PhoneActive fill={"#fff"} />
        </span>

        <div className={styles.description}>
          <p className={styles.phone_title}>{CardHeaderText.columns[3]}</p>
          {/* <p className={styles.phone}>{CardHeaderText.PoolPhone}</p> */}
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
