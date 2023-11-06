import styles from "./CookieBanner.module.css";
import { useContext } from "react";
import CookieContext from "../context/CookieContext";
import useText from "contexts/TextContext/useText";
import Button from "components/UI/Button/Button";
import useDesktop from "hooks/useDesktop";

const CookieBanner = () => {
  const { banner_language } = useText();
  const { isDesktop } = useDesktop();

  const {
    showCookieBanner,
    setShowCookieBanner,
    openCookieSettings,
    acceptCookies,
  } = useContext(CookieContext);

  const handleClick = (e) => {
    setShowCookieBanner(false);
    openCookieSettings();
  };

  return showCookieBanner ? (
    <div className="modal">
      <div className={styles.cookies_banner}>
        <h3 className={styles.title}>{banner_language.title}</h3>
        <div className={styles.description}>
          <p>{banner_language.contentBanner}</p>
          <div className={styles.cookies_buttons_container}>
            <Button
              // className={styles.config_btn}
              onClick={handleClick}
              variant="secondary_outline"
              size={isDesktop ? "xl" : "md"}
            >
              {banner_language.btnConfig}
            </Button>

            <Button
              // className={styles.accept_btn}
              onClick={acceptCookies}
              variant="secondary"
              size={isDesktop ? "xl" : "md"}
            >
              {banner_language.btnAccept}
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default CookieBanner;
