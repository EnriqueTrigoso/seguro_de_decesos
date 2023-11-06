import { Title45 } from "components/UI/Tags/Titles";
import Option from "./Option/Option";
import { useState } from "react";
import Modality1 from "./Modalities/Modality1";
import Modality2 from "./Modalities/Modality2";
import Modality3 from "./Modalities/Modality3";
import Modality4 from "./Modalities/Modality4";
import styles from "./Feature.module.css";
import { useModal } from "hooks/useModal";
import CallCardForm from "components/UI/CallCardForm/CallCardForm";
import ModalityCard from "./ModalityCard/ModalityCard";
import { useMediaQuery } from "react-responsive";
import TestimonialForm from "components/UI/TestimonialForm/TestimonialForm";
import useText from "contexts/TextContext/useText";

const Feature = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [currentModality, setCurrentModality] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOpenCallModal, openCallModal, closeCallModal] = useModal(false);

  const { policies_type } = useText();

  const displayModality = (currentModality) => {
    switch (currentModality) {
      case 1:
        return <Modality1 content={policies_type.cards[0]} />;
      case 2:
        return <Modality2 content={policies_type.cards[1]} />;
      case 3:
        return <Modality3 content={policies_type.cards[2]} />;
      case 4:
        return <Modality4 content={policies_type.cards[3]} />;
    }
  };

  const selectOption = (numOption) => {
    if (!isDesktop) setIsModalVisible(!isModalVisible);
    setCurrentModality(numOption);
  };

  const openCardCallModal = (e) => openCallModal();

  const closeCardCallModal = (close) => closeCallModal();

  return (
    <section className={`${styles.feature} container`} id="feature">
      <>
        <div className={styles.content}>
          <Title45>{policies_type.title}</Title45>

          {/* <Text20>
                {
                  content.description
                }
              </Text20> */}

          <div className={styles.options_container}>
            {policies_type.cards.map((card, index) => {
              return (
                <Option
                  key={index}
                  title={card.title}
                  active={currentModality == index + 1}
                  onClick={() => selectOption(index + 1)}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.modality_container}>
          <ModalityCard
            current={displayModality(currentModality)}
            btnContent={policies_type.cards[0].buttons.text}
            openCardCallModal={openCardCallModal}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </div>

        {isDesktop && <TestimonialForm style={{ bottom: "0px" }} />}

        {isOpenCallModal && (
          <CallCardForm
            setOpenModal={closeCardCallModal}
            setModalType={() => {}}
          />
        )}
      </>
    </section>
  );
};

export default Feature;
