import React from "react";
import styles from "./Hero.module.css";
import NavBar from "components/UI/NavBar/Header";
import PanelSection from "../PanelSection/PanelSection";

const Hero = () => {
  return (
    <section className={`${styles.hero} container`}>
      <NavBar />
      <PanelSection />
    </section>
  );
};

export default Hero;
