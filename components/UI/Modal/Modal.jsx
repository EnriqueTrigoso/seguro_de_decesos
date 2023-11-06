import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useEffect, useRef } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Modal = ({ children }) => {

  const modalRef = useRef(null);

  useEffect(() => {

    let currentRef = modalRef.current

    if (currentRef) {
      disableBodyScroll(currentRef)
    }

    return () => {
      enableBodyScroll(currentRef);
    }

  }, []);

  return ReactDOM.createPortal(
    <article className={`${styles.modal} ${styles.is_open}`} ref={modalRef}>
      <div
        className={styles.modal_container}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </article>
    ,
    document.getElementById("modal")
  );
};

export default Modal;
