import Question from "components/Icons/Question";
import CallCardForm from "components/UI/CallCardForm/CallCardForm";
import Help from "components/UI/Help/Help";
import ButtonCircle from "components/UI/ButtonCircle/ButtonCircle";
import { useState } from "react";
import RoundedButton from "components/UI/RoundedButton/RoundedButton";
import styles from "./HelpButtonWithFunctionality.module.css";
import useText from "contexts/TextContext/useText";

const HelpButtonWithFunctionality = ({ type = "question" }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("help");

  const { btn_help_language } = useText();

  return (
    <>
      {type === "question" ? (
        <div>
          <h4 className={styles.h4}>{btn_help_language.btnHelp}</h4>
          <ButtonCircle
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <div className={styles.content}>
              <Question />
            </div>
          </ButtonCircle>
        </div>
      ) : (
        <RoundedButton
          title={btn_help_language.btnHelpUpper}
          onClick={() => {
            setOpenModal(true);
          }}
        />
      )}

      {openModal && (
        <CallCardForm setOpenModal={setOpenModal} setModalType={setModalType} />
      )}
    </>
  );
};

export default HelpButtonWithFunctionality;
