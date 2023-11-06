import Button from "components/UI/Button/Button";
import Image from "next/image";
import styles from "./CallAction.module.css";
import decesos_callaction from "assets/imgs/6.webp";
import { Text18 } from "components/UI/Tags/Texts";
import { useState } from "react";
import useText from "contexts/TextContext/useText";
import { ArrowRight } from "components/Icons";
import { processBoldTextMod } from "utils/functions";
import Link from "next/link";
import useDesktop from "hooks/useDesktop";

const CallAction = () => {
  const [isOpenModalCall, setIsOpenModalCall] = useState(false);
  const { help } = useText();
  const { isDesktop } = useDesktop();

  return (
    <section className={`${styles.call_action} container`} id="callaction">
      <div className={styles.content}>
        <h2 className={styles.h2}>
          {processBoldTextMod(help.title, { color: "#00983A" })}
        </h2>

        <div className={styles.group}>
          <Text18>{help.description}</Text18>
          <div className={styles.date}>
            <Text18>
              <strong>{help.schedule[0]}</strong>
            </Text18>
            <Text18>
              <strong>{help.schedule[1]}</strong>
            </Text18>
          </div>
        </div>
        <Link href="/comparator" title="Comparador">
          <Button
            id={"comparador4"}
            icon={<ArrowRight />}
            variant="primary"
            size={isDesktop ? "xl" : "sm"}
          >
            {help.buttons[0].text}
          </Button>
        </Link>
      </div>
      <div className={styles.images_container}>
        <Image
          src={decesos_callaction}
          alt={help.metadata.alt}
          title={help.metadata.title}
        />
      </div>
    </section>
  );
};

export default CallAction;
