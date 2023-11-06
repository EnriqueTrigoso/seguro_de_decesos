import styles from "./CookieSwitch.module.css";
import { useContext } from "react";
import CookieContext from "../context/CookieContext";

const CookieSwitch = ({ cookieName }) => {
  const { cookies, setCookies } = useContext(CookieContext);
  const IS_ESSENTIAL = "essential";

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        defaultChecked={cookies[cookieName]}
        disabled={cookieName === IS_ESSENTIAL}
        onClick={() =>
          setCookies({
            ...cookies,
            [cookieName]: !cookies[cookieName],
          })
        }
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export default CookieSwitch;
