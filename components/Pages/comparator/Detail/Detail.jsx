import useText from "contexts/TextContext/useText";
import styles from "./Detail.module.css";
import { useLanguage } from "contexts/LanguageContext/useLanguage";

const Detail = () => {
  const { detail } = useText();
  const { domain } = useLanguage();

  return (
    <div className={styles.container_detail}>
      <div className={styles.detail}>
        <div className={styles.card}>
          <div>
            <h2 className={styles.h2}>
              {detail.title[0]} <br /> {detail.title[1]}
            </h2>
            <h3 className={styles.h3}>{detail.price}</h3>
          </div>

          <p className={styles.p}>
            {detail.footer[0].replace(/{domain}/g, domain)} <br />{" "}
            {detail.footer[1]}
          </p>
        </div>
      </div>

      <div className={styles.gradient}></div>
    </div>
  );
};

export default Detail;
