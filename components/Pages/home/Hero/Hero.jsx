import styles from "./Hero.module.css";
import TopSection from "./TopSection/TopSection";
import HeroPresentation from "components/UI/HeroPresentation/HeroPresentation";

const Hero = () => {
  return (
    <section className={styles.hero}>
        <div className="container">
          <HeroPresentation>
            <TopSection />
          </HeroPresentation>
        </div>
    </section>
  );
};

export default Hero;
