import { useState, useEffect } from "react";
import { useLanguage } from "contexts/LanguageContext/useLanguage";

export const useContent = ({ page, section }) => {
  const { language } = useLanguage();
  const [content, setContent] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {

    (async function () {
      import(`../data/Pages/${page}/${language}/${section}.json`)
        .then((module) => module.default)
        .then((res) => {
          setContent(res[section]);
        })
        .catch((err) => {
          setError("There is error");
          // console.log(err);
        });
    })();
  }, []);

  return { content, error };
};
