import NavBar from "components/UI/NavBar/Header";
import DataForm from "components/UI/DataForm/DataForm";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <NavBar />
      <div className="container">
        <DataForm />
      </div>
    </section>
  );
};

export default Hero;
