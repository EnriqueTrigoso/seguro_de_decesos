import styles from "./Details.module.css";
import decesos_details from "assets/imgs/5.webp";
import DetailsOptions from "./DetailsOptions/DetailsOptions";
import Image from "next/image";
import useText from "contexts/TextContext/useText";
import { processBoldTextMod } from "utils/functions";
import Link from "next/link";
import Button from "components/UI/Button/Button";
import { ArrowRight } from "components/Icons";
import useDesktop from "hooks/useDesktop";

const Details = () => {
  const { functioning } = useText();
  const { isDesktop } = useDesktop();

  return (
    <section className={styles.details}>
      <div className={`${styles.container} container`}>
        <Image
          src={decesos_details}
          alt={functioning.metadata.alt}
          title={functioning.metadata.title}
          // quality={100}
        />

        <div className={styles.content}>
          <div className={styles.group}>
            <h2 className={styles.h2}>{processBoldTextMod(functioning.title, { color: "#00983A" })}</h2>
            <p className={styles.p}>{functioning.description}</p>
          </div>

          <DetailsOptions options={functioning.list_info} />

          <p className={styles.phrase}>
            {processBoldTextMod(functioning.phrase, { color: "#00983A" })}
          </p>

          <Link
            href={functioning.button.link}
            title="Comparador"
            target="blank"
          >
            <Button
              variant="primary"
              icon={<ArrowRight />}
              size={isDesktop ? "xl" : "sm"}
            >
              {functioning.button.text}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Details;
