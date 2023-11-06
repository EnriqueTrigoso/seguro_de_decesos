import styles from "./Loader.module.css";
import useText from "contexts/TextContext/useText";

const Loader = () => {

  const { LoaderResult } = useText()

  return (
    <div className={styles.loading_screen}>
      <div className={styles.loading_info}>
        <div className={styles.lds_ring}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>
          Comparando precios y coberturas para ofrecerte las mejores
          alternativas en pólizas...
        </p>
        <p>{LoaderResult[1]}</p>
      </div>
    </div>
  );
};

export default Loader;
