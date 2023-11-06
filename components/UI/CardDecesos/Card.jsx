import styles from "./Card.module.css";

export const Card = ({ children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
