import Button from "components/UI/Button/Button";
import styles from "./ForgetPasswordModal.module.css";
import { useLanguage } from "contexts/LanguageContext/useLanguage";
import { POST } from "services/fetching";
import { useState } from "react";

const ForgetPasswordModal = ({ email }) => {
  const { domainIndex } = useLanguage();
  const [message, setMessage] = useState('');
  
  async function handleClick () {
    
    const body = {
        email,
        domain: domainIndex,
    };
    
    try {
        const recoveryPasswordRes = await POST('/user/send_recovery_password', body);
        setMessage('Verifica tu email');
    } catch (err) {
        setMessage('Al parecer ocurrio un error...');
    }
  }

  return (
    <>
      <span className={styles.title}>
        Te enviaremos un código a tu correo electrónico
      </span>
      <div className={styles.separator}></div>
      <p>Enviaremos un código de inicio de sesión a:</p>
      <p className={styles.email}>{email}</p>
      {message && <p>{message}</p>}
      <div className={styles.container_btn}>
        <Button onClick={handleClick} width={150}>
          Continuar
        </Button>
      </div>
    </>
  );
};

export default ForgetPasswordModal;
