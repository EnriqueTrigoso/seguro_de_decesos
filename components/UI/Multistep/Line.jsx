import styles from "./Lines.module.css";

export const MultiLine = ({ active = false, show = true }) => {
  return (
    <>
      {show && (
        <div
          className={active ? styles.multiline : styles.multilinedisabled}
        ></div>
      )}
    </>
  );
};
