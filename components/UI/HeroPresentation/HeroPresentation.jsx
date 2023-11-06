import styles from "./HeroPresentation.module.css";

const HeroPresentation = ({ children }) => {
  return <div className={styles.presentation}>{children}</div>;
};

export default HeroPresentation;
