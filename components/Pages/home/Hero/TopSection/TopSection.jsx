import Button from "components/UI/Button/Button";
import styles from "./TopSection.module.css";
import Link from "next/link";
import useText from "contexts/TextContext/useText";
import { processBoldTextMod } from "utils/functions";
import { ArrowRight } from "components/Icons";
import useDesktop from "hooks/useDesktop";

const TopSection = () => {
  const { hero } = useText();
  const { isDesktop } = useDesktop();

  return (
    <div className={styles.topsection}>
      <div className={styles.title_container}>
        <h1 className={styles.h1}>
          {processBoldTextMod(hero.title, { fontWeight: "900" })}
        </h1>
        <p className={styles.p}>
          {processBoldTextMod(hero.description, { fontWeight: "700" })}
        </p>
      </div>
      <Link href={"/comparator"} title="Comparador">
        <Button
          id={"comparador2"}
          icon={<ArrowRight />}
          variant="secondary"
          size={isDesktop ? "xl" : "l"}
        >
          {hero.buttons[0].text}
        </Button>
      </Link>
    </div>
  );
};

export default TopSection;
