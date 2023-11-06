import HelpButtonWithFunctionality from "components/UI/HelpButtonWithFunctionality/HelpButtonWithFunctionality";
import styles from "./StickyButtons.module.css";

const StickyButtons = () => {
  return (
    <div className={`${styles.sticky_buttons_container}`}>
      <footer className={`${styles.footer}`}>
        <div className={styles.buttons_container}>
          <HelpButtonWithFunctionality />
        </div>
      </footer>
    </div>
  );
};

export default StickyButtons;
