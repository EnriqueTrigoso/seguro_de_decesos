import Button from "components/UI/Button/Button";
import styles from "./ModalityCard.module.css";
import { useMediaQuery } from "react-responsive";
import { Close } from "components/Icons";

const ModalityCard = ({
  current,
  btnContent,
  openCardCallModal,
  isModalVisible,
  setIsModalVisible,
}) => {
  
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      {isDesktop || isModalVisible ? (
        <div
          className={isDesktop ? styles.card : "modal center"}
          onClick={() => setIsModalVisible(false)}
        >
          <div
            className={`${!isDesktop && styles.card}`}
            onClick={(e) => e.stopPropagation()}
          >
            {!isDesktop && (
              <div className={styles.close_modal}>
                <div onClick={() => setIsModalVisible(false)}>
                  <Close stroke="#5E6788" width={14} height={14} />
                </div>
              </div>
            )}
            {current}
            <div className={styles.container_btn}>
              <Button width={229} height={62} onClick={openCardCallModal}>
                {btnContent}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ModalityCard;
