import styles from "./CookieList.module.css";
import useText from "contexts/TextContext/useText";

const CookieList = ({ title, info, uses }) => {

  const { text_language } = useText()

  return (
    <div className={styles.cookie_list_content}>
      <h4>{title}</h4>
      <h5>{text_language.info}</h5>
      <p>{info}</p>
      <h5>{text_language.uses}</h5>
      <p>{uses}</p>
    </div>
  );
};

export default CookieList;
