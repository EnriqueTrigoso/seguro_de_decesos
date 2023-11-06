import styles from "./BottomSection.module.css";
import LogosSlider from "./LogosSlider/LogosSlider";
import { getLogo } from "utils/functions";
import { logos } from "const/constantes";
import useText from "contexts/TextContext/useText";
import { useLanguage } from "contexts/LanguageContext/useLanguage";

const BottomSection = () => {
  const { language } = useLanguage();
  const { logos_metadata } = useText();

  return (
    <section className={"container"}>
      <div className={styles.bottom_presentation}>
        <div className={styles.logo_container}>{getLogo(language)}</div>
        <div className={styles.separator}></div>
        <LogosSlider logos={logos} logos_metadata={logos_metadata} />
      </div>
    </section>
  );
};

export default BottomSection;
