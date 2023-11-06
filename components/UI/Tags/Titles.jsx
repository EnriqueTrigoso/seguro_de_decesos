import styles from "./Titles.module.css";

export const Title55 = ({ children }) => {
  return (
    <h1 className={styles.title55}>
      {children}
    </h1>
  );
};

export const Title45 = ({ children, style }) => {
  return (
    <h2 className={styles.title45} style={style}>
      {children}
    </h2>
  );
};

export const Title40 = ({ children, style }) => {
  return (
    <h2 className={styles.title40} style={style}>
      {children}
    </h2>
  );
};

export const Title30 = ({ children }) => {
  return (
    <span className={styles.title30}>
      {children}
    </span>
  );
};

export const Title25 = ({ children, style }) => {
  return (
    <span className={styles.title25} style={style}>
      {children}
    </span>
  );
};

export const Title24 = ({ children }) => {
  return (
    <span className={styles.title24}>
      {children}
    </span>
  );
};

export const Title20 = ({ children }) => {
  return <span className={styles.title20}>{children}</span>;
};

export const Title18 = ({ children, style }) => {
  return (
    <span className={styles.title18} style={style}>
      {children}
    </span>
  );
};

export const Title16 = ({ children }) => {
  return <span className={styles.title16}>{children}</span>;
};

export const Title14 = ({ children }) => {
  return <span className={styles.title14}>{children}</span>;
};

export const Title12 = ({ children }) => {
  return <span className={styles.title12}>{children}</span>;
};
