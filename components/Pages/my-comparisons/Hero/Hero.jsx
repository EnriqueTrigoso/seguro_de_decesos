import styles from "./Hero.module.css";
import Comparative from "components/UI/Comparative/Comparative";
import NavBar from "components/UI/NavBar/Header";
import { IsLoginProvider } from "contexts/IsLoginContext/IsLoginProvider";
import useText from "contexts/TextContext/useText";

const Hero = () => {
  const { comparativelanguage } = useText();

  return (
    <section className={styles.hero}>
      <IsLoginProvider>
        <NavBar />
      </IsLoginProvider>
      <div className={`${styles.compartive} container`}>
        <Comparative
          title={comparativelanguage.lastComparativeTitle}
          data={[
            {
              title: comparativelanguage.carText,
              date: "19/01/23 16:41",
              insured: "2",
            },
            {
              title: comparativelanguage.homeText,
              date: "19/01/23 16:41",
              insured: "5",
            },
            {
              title: comparativelanguage.healthText,
              date: "19/01/23 16:41",
              insured: "2",
            },
            {
              title: comparativelanguage.deathText,
              date: "19/01/23 16:41",
              insured: "1",
            },
          ]}
        />

        <Comparative
          title={comparativelanguage.deathComparativeTitle}
          data={[
            {
              title: comparativelanguage.carText,
              date: "19/01/23 16:41",
              insured: "2",
            },
            {
              title: comparativelanguage.homeText,
              date: "19/01/23 16:41",
              insured: "5",
            },
            {
              title: comparativelanguage.healthText,
              date: "19/01/23 16:41",
              insured: "2",
            },
            {
              title: comparativelanguage.deathText,
              date: "19/01/23 16:41",
              insured: "1",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Hero;
