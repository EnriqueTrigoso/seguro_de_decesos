import SheetOption from "components/UI/SheetOption/SheetOption";
import styles from "./SheetOptions.module.css";

const SheetOptions = ({ list_info }) => {
  return (
    <div className={styles.options_container}>
      {list_info?.map((sheetText, index) => {
        return (
          <SheetOption key={index}>
            <h2 className={styles.option_title}>{sheetText}</h2>
          </SheetOption>
        );
      })}
    </div>
  );
};

export default SheetOptions;
