import styles from "./LoginRegister.module.css";
import { useLanguage } from "contexts/LanguageContext/useLanguage";
import { loginCardText } from "data/Pages/Login-Register";
import InputLogin from "components/UI/LoginRegisterCard/InputLogin/InputLogin";
import Checkbox from "components/UI/Checkbox/Checkbox";
import Link from "next/link";
import ButtonWithLoading from "components/UI/ButtonWithLoading/ButtonWithLoading";
import { useLogin } from "../hooks/useLogin";

const LoginComparador = ({ closeModal }) => {
  const { language } = useLanguage();
  const loginText = loginCardText[language]["login"];
  const {
    emailRef,
    passwordRef,
    loading,
    isValidEmail,
    isValidPassword,
    login,
  } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidData = await login();
    isValidData && closeModal();
  }

  return (
    <div className={styles.card} onClick={(e) => e.stopPropagation()}>
      <div>
        <div className={styles.header}>
          <span className={styles.title}>{loginText.title}</span>
          <p className={styles.description}>{loginText.description}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <InputLogin
            ref={emailRef}
            title={loginText.input_email.title}
            placeholder={loginText.input_email.placeholder}
          />
          {isValidEmail || isValidEmail === null ? (
            <></>
          ) : (
            <span className={styles.error_msg}>
              Correo electrónico no válido
            </span>
          )}
          <InputLogin
            ref={passwordRef}
            type={"password"}
            title={loginText.input_password.title}
            placeholder={loginText.input_password.placeholder}
          />
          {isValidPassword || isValidPassword === null ? (
            <></>
          ) : (
            <span className={styles.error_msg}>
              Contraseña incorrecta, intentelo de nuevo
            </span>
          )}
          <div className={styles.wrapper_help}>
            <div className={styles.remember_me}>
              <Checkbox />
              <p>{loginText.checkbox}</p>
            </div>
            {loginText?.forgetPassword && (
              <Link href={""}>
                <p>{loginText.forgetPassword}</p>
              </Link>
            )}
          </div>
          <div className={styles.container_login_btn}>
            <ButtonWithLoading
              loading={loading}
              onClick={handleSubmit}
            >
              {loginText.button}
            </ButtonWithLoading>
          </div>
        </form>
        {/*CAPCHA*/}
        <div className={styles.container_action}>
          <p>{loginText.accion[0]}</p>
          <p
            className={styles.show_register}
            onClick={() => {
              // console.log("Show Registar")
            }}
          >
            {loginText.accion[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComparador;
