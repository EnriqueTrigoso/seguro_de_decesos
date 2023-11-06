import styles from "./Card.module.css";

const Card = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <span className={styles.span}>{title}</span>

      <ul>
        {children.map((anchor, index) => {
          return <li key={index}>{anchor}</li>;
        })}
      </ul>
    </div>
  );
};

export default Card;
