import Image from "next/image";
import styles from "./Help.module.css";
// import family from 'assets/imgs/family.webp'
import Close from "components/Icons/Close";
import Button from "components/UI/Button/Button";
import Componente2 from "../Componente2/Componente2";
import { useEffect, useRef } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import useText from "contexts/TextContext/useText";

const Help = ({ setOpenModal, setModalType }) => {
  const { help_card_language } = useText();

  const modalRef = useRef(null);

  useEffect(() => {
    const targetElement = modalRef.current;

    if (targetElement) {
      disableBodyScroll(targetElement);
    }

    return () => {
      enableBodyScroll(targetElement);
    };
  }, []);

  return (
    <div className={`${styles.help_container} modal center`}>
      <div
        ref={modalRef}
        className={styles.help_card}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.close}
          onClick={(e) => {
            e.stopPropagation();
            setOpenModal(false);
          }}
        >
          <Close width={16} height={16} />
        </button>

        <div className={styles.help_content}>
          <div className={styles.image}>
            {/* <Image src={family} alt={""} priority={true} /> */}
          </div>

          <div className={styles.content}>
            <div className={styles.title_container}>
              <h3 className={styles.title}>{help_card_language.title}</h3>
              <p className={styles.description}>
                {help_card_language.description}
              </p>
            </div>

            <Componente2>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setModalType("callcard");
                }}
              >
                {help_card_language.btnCall}
              </Button>
            </Componente2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
