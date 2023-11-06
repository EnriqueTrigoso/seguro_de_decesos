import styles from "./Repatriation.module.css";
import Image from "next/image";
import { processBoldTextMod } from "utils/functions";
import repatriationImage from "assets/imgs/20.webp";

const Hero = () => {
  const text = "Repatriación /a Colombia/";
  return (
    <section className={styles.repatriation}>
      <div className="container">
        <div className={styles.center}>
          <div className={styles.content}>
            <Image
              src={repatriationImage}
              width={400}
              height={392}
              className={styles.image}
            />
            <div className={styles.details}>
              <h2 className={styles.h2}>
                {processBoldTextMod(text, { color: "#00983A" })}
              </h2>
              <p className={styles.description}>
                En caso de fallecimiento, nuestras aseguradoras se encargarán de
                los costes y de gestionar el traslado a Colombia, cubriendo
                todos los gastos adicionales que puedan surgir al realizar el
                servicio funerario en tu localidad de origen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
