import { createContext, useEffect, useState } from "react";
import { useModal } from "hooks/useModal";
import { areCookies, setCookiesInBrowser } from "../helpers/helpCookies";

const CookieContext = createContext();

const CookieProvider = ({ children }) => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [isCookieSettings, openCookieSettings, closeCookieSettings] = useModal(false);

  const [cookies, setCookies] = useState({
    marketing: false,
    personalization: false,
    analytics: true,
    essential: true,
  });

  const acceptCookies = () => {
    setCookiesInBrowser(cookies);
    setShowCookieBanner(false);
    closeCookieSettings()
  }

  useEffect(() => {
    setShowCookieBanner(!areCookies())
  }, []);

  const data = {
    showCookieBanner,
    setShowCookieBanner,
    isCookieSettings,
    openCookieSettings,
    closeCookieSettings,
    cookies,
    setCookies,
    acceptCookies,
  };

  return (
    <CookieContext.Provider value={data}>{children}</CookieContext.Provider>
  );
};

export { CookieProvider };
export default CookieContext;
