import Spot from "components/Icons/Spot";
import RightAngle from "components/Icons/RightAngle";
import { Title18 } from "components/UI/Tags/Titles";
import styles from "./Option.module.css";

const Option = ({ title, description, active = false, onClick }) => {
  return (
    <div
      className={`${styles.card} ${active && styles.card_active}`}
      onClick={onClick}
    >
      <Spot />
      <div>
        <Title18 style={{ marginBottom: "0px" }}>{title}</Title18>
      </div>
      <span className={`${styles.circle} ${active && styles.circle_active}`}>
        <RightAngle fill={"var(--green-primary)"} width={10} height={15} />
      </span>
    </div>
  );
};

export default Option;
