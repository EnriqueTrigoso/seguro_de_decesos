// import user_panel_hero from "assets/imgs/user_panel_hero.webp";
import Image from "next/image";
import styles from "./PanelSection.module.css";
import { Title45 } from "components/UI/Tags/Titles";
import Button from "components/UI/Button/Button";
import { logos } from "const/constantes";
import { Spot } from "components/Icons";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import useText from "contexts/TextContext/useText";
import LogoSlider from "components/Pages/home/LogoSlider/LogosSlider/LogosSlider";

const PanelSection = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { panel_section_language } = useText();

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.image_container}>
          {/* <Image src={user_panel_hero} alt="" priority={true} /> */}
        </div>

        <div className={styles.main_container}>
          <h4 className={styles.main_container_item}>
            {panel_section_language.deathInsurance}
          </h4>
          <Title45>{panel_section_language.title}</Title45>
          <p className={styles.main_container_item}>
            {panel_section_language.description}
          </p>

          <div className={styles.button_wrapper}>
            <div className={styles.button_container}>
              <Link href={"/comparator"} title="Comparador">
                <Button>{panel_section_language.btnTxt}</Button>
              </Link>
            </div>
          </div>

          <div className={styles.pad}></div>
          <div className={styles.main_container2}>
            <p className={styles.main_container_item2}>
              <Spot /> {panel_section_language.compareTxt}
            </p>
            {isDesktop ? (
              <div className={styles.logos_slider}>
                <LogoSlider logos={logos} />
              </div>
            ) : (
              <div className={styles.slider_wrapper}>
                <div className={styles.logos_slider}>
                  <LogoSlider logos={logos} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelSection;
