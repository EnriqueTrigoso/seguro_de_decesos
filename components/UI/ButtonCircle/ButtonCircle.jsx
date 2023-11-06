import styles from "./ButtonCircle.module.css";

const ButtonCircle = ({ children, size, color, onClick }) => {
  return (
    <button
      className={`${styles.button}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `${color}`,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonCircle;
