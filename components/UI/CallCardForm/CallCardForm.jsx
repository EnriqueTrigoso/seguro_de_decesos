import Close from "components/Icons/Close";
import styles from "./CallCardForm.module.css";
import { useState, useRef } from "react";
import { useLayoutEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Form from "./Form/Form";
import Gratitude from "./Gratitude/Gratitude";

const CallCardForm = ({ setOpenModal, setModalType }) => {
 
  const [isForm, setIsForm] = useState(true);
  const modalRef = useRef(null);

  useLayoutEffect(() => {

    const modalReference = modalRef.current;

    if (modalReference) {
      disableBodyScroll(modalReference);
    }

    return () => {
      enableBodyScroll(modalReference);
    };

  }, []);

  return (
    <div className="modal center" ref={modalRef}>
      <div className={styles.call_card} onClick={(e) => e.stopPropagation()}>
        
        <div className={styles.close_button_container}>
          <div
            onClick={() => {
              setOpenModal(false);
              setModalType("help");
            }}
          >
            <Close
              width={12}
              height={12}
              stroke={isForm ? "#232263" : "#fff"}
            />
          </div>
        </div>


        {isForm ? <Form setIsForm={setIsForm}/> : <Gratitude />}
  

      </div>
    </div>
  );
};

export default CallCardForm;
