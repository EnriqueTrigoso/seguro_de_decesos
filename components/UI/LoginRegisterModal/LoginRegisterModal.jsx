import Close from "components/Icons/Close";
import { useEffect } from "react";
import ButtonCircle from "../ButtonCircle/ButtonCircle";
import styles from "./LoginRegisterModal.module.css";
import SessionModalWrapper from "components/Pages/comparator/Session/SessionModalWrapper";
import { useLoginRegisterModal } from "components/Pages/comparator/context/LoginRegisterModalContext/useLoginRegisterModal";

const LoginRegisterModal = ({ setOpenLogin, type, setType }) => {
  const { setSendData } = useLoginRegisterModal();

  return (
    <div
      className="modal center"
      onClick={() => {
        // setOpenLogin(false)
        // setSendData(false)
      }}
    >
      <div className={styles.login_container}>
        <div className={styles.login_wrapper}>
          <div className={styles.close_button_container}>
            <ButtonCircle
              size={30}
              color={"#fff"}
              onClick={() => {
                setOpenLogin(false);
                setSendData(false);
              }}
            >
              <Close width={15} height={15} />
            </ButtonCircle>
          </div>

          <SessionModalWrapper type={type} setType={setType} />
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterModal;
