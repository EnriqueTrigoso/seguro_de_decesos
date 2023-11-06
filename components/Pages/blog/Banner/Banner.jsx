import styles from "./Banner.module.css";
import Image from "next/image";
import Button from "components/UI/Button/Button";
import Link from "next/link";
import { processBoldText } from "utils/functions";
import banner1 from "assets/imgs/banner1.webp";
import banner2 from "assets/imgs/banner2.webp";
import banner3 from "assets/imgs/banner3.webp";

export const Banner = ({ data, id }) => {
  const { title } = data;

  return (
    <section className={styles.banner}>
      <Image src={banner1} width={200} className={styles.none_desktop} />
      <div className={styles.details}>
        <h2 className={styles.title}>
          {processBoldText(title).map((elem, index) => {
            if (elem.type === "text") {
              return elem.content + " ";
            } else {
              return (
                <span key={index} style={{ color: "#00983A" }}>
                  {elem.content}{" "}
                </span>
              );
            }
          })}
        </h2>
        <Link href="/comparator">
          <Button size="sm">Compara ahora</Button>
        </Link>
      </div>
      <Image src={banner2} width={200} className={styles.none_desktop} />
      <Image src={banner3} width={200} className={styles.none_mobil} />
    </section>
  );
};
