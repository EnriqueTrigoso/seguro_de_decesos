import React from "react";
import styles from "./Componente1.module.css";

const Componente1 = ({ children }) => {
  return <div className={styles.container__button}>{children}</div>;
};

export default Componente1;
