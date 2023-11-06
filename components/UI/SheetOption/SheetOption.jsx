import styles from "./SheetOption.module.css";
import { Spot } from "components/Icons";

const SheetOption = ({ children }) => {
  return (
    <div className={styles.option_container}>
      <Spot width={16} height={25} />
      {children}
    </div>
  );
};

export default SheetOption;
