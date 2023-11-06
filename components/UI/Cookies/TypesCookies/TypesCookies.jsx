import styles from "./TypesCookies.module.css";
import CookieSwitch from "../CookieSwitch/CookieSwitch";
import CookieList from "../CookieList/CookieList";
import { useState } from "react";
import useText from "contexts/TextContext/useText";

const TypesCookies = ({
  title,
  cookieName,
  description,
  showCookieListTxt,
}) => {

  const [showListCookies, setListCookies] = useState(false);
  const { cookie_list_language } = useText()

  return (
    <div className={styles.type_cookie_container}>
      <div className={styles.type_cookie}>
        <h3>{title}</h3>
        <CookieSwitch cookieName={cookieName} />
      </div>
      <p>{description}</p>
      <button
        className={styles.show_cookie_list_btn}
        onClick={() => setListCookies(!showListCookies)}
      >
        {showCookieListTxt}
      </button>
      {showListCookies &&
        cookie_list_language.map((cookie, index) => {
          return (
            <CookieList
              key={index}
              title={cookie.title}
              info={cookie.info}
              uses={cookie.uses}
            />
          );
        })}
    </div>
  );
};

export default TypesCookies;
