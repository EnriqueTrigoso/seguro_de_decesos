import styles from "./CookieSettingModal.module.css";
import { useContext } from "react";
import CookieContext from "../context/CookieContext";
import { Close } from "components/Icons";
import TypesCookies from "../TypesCookies/TypesCookies";
import useText from "contexts/TextContext/useText";

const CookieSettingModal = () => {
  const {
    isCookieSettings,
    setShowCookieBanner,
    closeCookieSettings,
    acceptCookies,
  } = useContext(CookieContext);

  const { cookies_setting_language, type_cookies } = useText()

  const handleClick = () => {
    closeCookieSettings();
    setShowCookieBanner(true);
  };

  return (
    isCookieSettings && (
      <div className={styles.cookies_settings_container}>
        <div className={styles.cookies_settings_card}>
          <div className={styles.close_btn_container} onClick={handleClick}>
            <p>{cookies_setting_language.btnClose}</p>
            <div>
              <Close stroke="#5E6788" height={19} />
            </div>
          </div>
          <h2>{cookies_setting_language.modalTitle}</h2>
          <p className={styles.cookies_description}>
            {cookies_setting_language.cookiesDescription}
          </p>
          {type_cookies.cookies.map((cookie, index) => {
            return (
              <TypesCookies
                key={index}
                title={cookie.title}
                cookieName={cookie.cookieName}
                description={cookie.description}
                showCookieListTxt={type_cookies.showListCookies}
              />
            );
          })}
          <div className={styles.save_settings_container}>
            <button onClick={acceptCookies}>
              {cookies_setting_language.btnSaveConfig}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieSettingModal;
