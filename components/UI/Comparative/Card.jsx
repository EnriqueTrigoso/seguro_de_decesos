import CardTitle from "components/UI/CardTitle/CardTitle";
import { Title18 } from "components/UI/Tags/Titles";
import { useMediaQuery } from "react-responsive";
import styles from "./Card.module.css";
import useText from "contexts/TextContext/useText";

const Card = ({ title, date, insured }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { comparative_user_panel_language } = useText();

  return (
    <div className={styles.card}>
      <CardTitle title={title} isDesktop={isDesktop} circleSize={30} />

      <div className={styles.content}>
        <p className={styles.date}>{date}</p>
        <Title18>{comparative_user_panel_language.NumInsured}</Title18>
        <p className={styles.insured}>
          {comparative_user_panel_language.total} {insured}{" "}
          {comparative_user_panel_language.Insured}
        </p>
      </div>
    </div>
  );
};

export default Card;
