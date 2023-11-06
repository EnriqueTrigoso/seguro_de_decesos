import { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { getLanguage } from "utils/functions";
import { useRouter } from "next/router";

export const LanguageProvider = ({ children }) => {
	
  const router = useRouter();
  const { locale } = router;
  const [language, setLanguage] = useState(locale);
  const { domainIndex, domain } = getLanguage(language);

  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, domainIndex, domain }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
