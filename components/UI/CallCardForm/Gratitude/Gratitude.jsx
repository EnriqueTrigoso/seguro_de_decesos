import styles from "./Gratitude.module.css";
import Image from "next/image";
import gratitude from "assets/imgs/gratitude.webp";
import { getLogo, processBoldTextMod } from "utils/functions";
import { useLanguage } from "contexts/LanguageContext/useLanguage";
import useText from "contexts/TextContext/useText";

const Gratitude = () => {

  const { language } = useLanguage();
  const { call_card_form_language } = useText();

  return (
    <div className={styles.container}>
      <div className={styles.blue_background}>
        <Image src={gratitude} alt={""} />
      </div>

      <div className={styles.content}>
        <div className={styles.logo}>{getLogo(language)}</div>

        <p className={styles.gratitude__text}>
          {processBoldTextMod(call_card_form_language.gratitude, { fontWeight: "700" })}
        </p>
        
      </div>
    </div>
  );
};

export default Gratitude;
