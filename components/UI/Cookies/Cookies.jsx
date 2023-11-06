import CookieBanner from "./CookieBanner/CookieBanner";
import CookieSettingModal from "./CookieSettingModal/CookieSettingModal";
import { CookieProvider } from "./context/CookieContext";

const Cookies = () => {
  return (
    <CookieProvider>
      <CookieBanner />
      <CookieSettingModal />
    </CookieProvider>
  );
};

export default Cookies;
