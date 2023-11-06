import styles from "./EmailModal.module.css";
import ButtonWithLoading from "components/UI/ButtonWithLoading/ButtonWithLoading";
import InputForm from "components/UI/LoginRegisterCard/InputForm/InputForm";
import { useRef, useState } from "react";
import { POST } from "services/fetching";
import { useLanguage } from "contexts/LanguageContext/useLanguage";
import { useLoginRegisterModal } from "components/Pages/comparator/context/LoginRegisterModalContext/useLoginRegisterModal";
import { getLogo } from "utils/functions";
import useText from "contexts/TextContext/useText";

const inputRegEx = {
  name: /^[A-ZÁÉÍÓÚa-záéíóú]+(\s[A-ZÁÉÍÓÚa-záéíóú]+)?(\s[A-ZÁÉÍÓÚa-záéíóú]+)?(\s[A-ZÁÉÍÓÚa-záéíóú]+)?$/,
  phone: /^(\+34|34)?[6-9]\d{8}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

const EmailModal = () => {
  const { email_modal } = useText();

  console.log({ email_modal });

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const { setIsOpenModal, setSendData } = useLoginRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const { language, domainIndex } = useLanguage();

  const [errorNameMsg, setErrorNameMsg] = useState(email_modal.error.name);
  const [errorPhoneMsg, setErrorPhoneMsg] = useState(email_modal.error.phone);
  const [errorEmailMsg, setErrorEmailMsg] = useState(email_modal.error.email);

  async function handleSubmit() {
    setIsLoading(true);

    const name = nameRef.current.value.trim();
    const phone = phoneRef.current.value.replace(/\s/g, "");
    const email = emailRef.current.value.trim().toLowerCase();

    const isValidName = typeof name === "string" && name !== "";

    const isValidPhone = Boolean(phone.match(inputRegEx.phone));

    const isValidEmail = Boolean(email.match(inputRegEx.email));

    if (!isValidName) {
      setNameError(true);
    }

    if (!isValidPhone) {
      setPhoneError(true);
    }

    if (!isValidEmail) {
      setEmailError(true);
    }

    if (!isValidName || !isValidPhone || !isValidEmail) {
      setIsLoading(false);
      return;
    }

    let body = {
      email,
      domain: domainIndex,
    };

    try {
      const emailJson = await POST("/user/register", body);
      const { status } = emailJson;

      if (status !== "ok") {
        setErrorEmailMsg(email_modal.error.email_already_registered);
        throw new Error(email_modal.error.email_already_registered);
      }

      try {
        const lead = await POST("/deaths_insurance/leads/register_lead", {
          name,
          email,
          phone,
          id_domain: domainIndex,
        });
      } catch (err) {
        // console.log({ err })
      }

      window.localStorage.setItem(
        "userDataEva",
        JSON.stringify({ ...emailJson, email })
      );

      setIsLoading(false);
      setIsOpenModal(false);
      setSendData(true);
    } catch (err) {
      // console.log({ err })
      setEmailError(true);
      setIsLoading(false);
    }
  }

  async function handleOnKeyDown(e) {
    if (e.key != "Enter") return;
    handleSubmit();
  }

  return (
    <div onKeyDownCapture={handleOnKeyDown} className={styles.container}>
      <div className={styles.logo_container}>{getLogo(language)}</div>

      <InputForm
        ref={nameRef}
        title={email_modal.input[0].title}
        placeholder={email_modal.input[0].placeholder}
        errorStatus={nameError}
        errorMsg={errorNameMsg}
        changeError={() => {
          setNameError(false);
        }}
      />

      <InputForm
        ref={phoneRef}
        title={email_modal.input[1].title}
        placeholder={email_modal.input[1].placeholder}
        errorStatus={phoneError}
        errorMsg={errorPhoneMsg}
        changeError={() => {
          setPhoneError(false);
        }}
        mask={"999 99 99 99"}
      />

      <InputForm
        ref={emailRef}
        title={email_modal.input[2].title}
        placeholder={email_modal.input[2].placeholder}
        errorStatus={emailError}
        errorMsg={errorEmailMsg}
        changeError={() => {
          setEmailError(false);
          setErrorEmailMsg(email_modal.error.email);
        }}
      />

      <ButtonWithLoading loading={isLoading} onClick={handleSubmit}>
        {email_modal.button}
      </ButtonWithLoading>
    </div>
  );
};

export default EmailModal;
