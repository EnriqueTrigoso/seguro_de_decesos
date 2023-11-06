import styles from "./Banner.module.css";
import Image from "next/image";
import Button from "components/UI/Button/Button";
import Link from "next/link";
import { processBoldText } from "utils/functions";

export const Banner = ({ data, id }) => {
  const { title, button } = data;

  return (
    <section>
      <div className={styles.banner}>
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
            <Button variant="primary_outline" size="sm">
              {button}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
