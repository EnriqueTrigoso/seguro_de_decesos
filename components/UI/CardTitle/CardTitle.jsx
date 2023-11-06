import styles from "./CardTitle.module.css";
import { Title18 } from "components/UI/Tags/Titles";
import { Spot } from "components/Icons";
import useText from "contexts/TextContext/useText";

const CardTitle = ({ title, isDesktop, circleSize = 60 }) => {
  const { card_user_panelLanguage } = useText();

  return (
    <div className={styles.title_container}>
      <span
        className={styles.circle}
        style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M5.83372 8.84968L11.196 3.48746L12.0209 4.31241L5.83372 10.4996L2.1214 6.7873L2.94635 5.96235L5.83372 8.84968Z"
            fill="white"
          />
        </svg>
      </span>

      {isDesktop ? (
        <div className={styles.seguro_title}>
          <Title18>
            {card_user_panelLanguage.halfOfTitle} {title}
          </Title18>
        </div>
      ) : (
        <div className={styles.seguro_title}>
          <h3 className={styles.title_1}>
            {card_user_panelLanguage.halfOfTitle}
          </h3>
          <h3 className={styles.title_2}>{title}</h3>
        </div>
      )}
    </div>
  );
};

export default CardTitle;
