import Button from "components/UI/Button/Button";
import styles from "./TopSection.module.css";
import Link from "next/link";
import { ArrowRight } from "components/Icons";
import CallCardForm from "../CallCardForm/CallCardForm";
import { useState } from "react";
import useDesktop from "hooks/useDesktop";
import { processBoldTextMod } from "utils/functions";

const TopSection = ({
  subtitle,
  description,
  button_compare,
  button_contact,
  button_onClick,
  button_href,
}) => {
  const [isOpenModalCall, setIsOpenModalCall] = useState(false);
  const { isDesktop } = useDesktop();

  return (
    <div className={styles.top_section}>
      <div className={styles.subtitle_container}>
        <h2 className={styles.h2}>
          {processBoldTextMod(subtitle, { color: "#00983A" })}
        </h2>
      </div>
      <div className={styles.description_wrapper}>
        <p className={styles.p}>{description}</p>
      </div>
      <div className={styles.group_buttons}>
        <Link href={"/comparator"} title="Comparador">
          <Button
            id={"comparador3"}
            icon={<ArrowRight />}
            variant="primary"
            size={isDesktop ? "xl" : "sm"}
          >
            {button_compare}
          </Button>
        </Link>

        <Button
          variant="primary_outline"
          size={isDesktop ? "xl" : "sm"}
          icon={<ArrowRight />}
          onClick={() => {
            setIsOpenModalCall(true);
          }}
        >
          {button_contact}
        </Button>
        {/* </Link> */}
      </div>

      {isOpenModalCall && (
        <CallCardForm
          setOpenModal={setIsOpenModalCall}
          setModalType={() => {}}
        />
      )}
    </div>
  );
};

export default TopSection;
