import { useRef, useState } from "react";
import Input from "../Input";
import ReactInputMask from "react-input-mask";
import ButtonWithLoading from "components/UI/ButtonWithLoading/ButtonWithLoading";
import styles from "./Form.module.css";
import { useLanguage } from "contexts/LanguageContext/useLanguage";
import useText from "contexts/TextContext/useText";
import { getLogo } from "utils/functions";

const Form = ({ setIsForm }) => {
  const [isPhoneValid, setIsPhoneValid] = useState(null);
  const [isNameValid, setIsNameValid] = useState(null);
  const [loading, setLoading] = useState(false);
  const userPhone = useRef();
  const userName = useRef();

  const { language } = useLanguage();
  const { call_card_form_language } = useText();

  const handelSubmit = () => {
    // const phone = userPhone.current.value;
    // const name = userName.current.value;

    // const phoneValid = Boolean(phone.match(/^(6|7)[ -]*([0-9][ -]*){8}$/));
    // const nameValid = Boolean(name.match(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/));

    // setIsPhoneValid(phoneValid);
    // setIsNameValid(nameValid);

    // if (!phoneValid || !nameValid) {
    //   return;
    // }

    setLoading(true);

    setTimeout(() => {
      setIsForm(false);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.content}>
      <div className={styles.detail}>
        <div className={styles.logo_container}>{getLogo(language)}</div>

        <div className={styles.ctn_icon}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M23.3735 18.3729V22.2523C23.3735 22.8283 22.9282 23.3061 22.3538 23.3467C21.8739 23.3806 21.4825 23.3975 21.1794 23.3975C11.485 23.3975 3.62622 15.5388 3.62622 5.84435C3.62622 5.54124 3.64317 5.14976 3.67707 4.66994C3.71768 4.09549 4.19554 3.65021 4.77141 3.65021H8.65093C8.93252 3.65021 9.16837 3.8635 9.19664 4.14367C9.22203 4.3952 9.24563 4.59714 9.26745 4.7495C9.48936 6.29933 9.94265 7.7745 10.5912 9.1389C10.6953 9.3579 10.6274 9.62003 10.4301 9.76097L8.06229 11.4524C9.50381 14.8196 12.2041 17.52 15.5714 18.9615L17.2597 16.5978C17.4024 16.3981 17.6677 16.3294 17.8893 16.4346C19.2536 17.0827 20.7286 17.5354 22.2782 17.7568C22.4296 17.7785 22.6303 17.8019 22.8801 17.8271C23.1603 17.8554 23.3735 18.0913 23.3735 18.3729Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div>
          <h2 className={styles.title}>{call_card_form_language.title}</h2>
          <p className={styles.description}>
            {call_card_form_language.description}
          </p>
        </div>
        <div className={styles.buttons}>
          <Input>
            <input
              ref={userName}
              type="text"
              name="name"
              placeholder={call_card_form_language.namePlaceholder}
            />
          </Input>
          {isNameValid || isNameValid === null ? (
            <></>
          ) : (
            <p className={styles.error_msg}>
              {call_card_form_language.errorMsgName}
            </p>
          )}
          <Input>
            <ReactInputMask
              ref={userPhone}
              mask="999 99 99 99"
              maskChar=""
              name="phone"
              placeholder={call_card_form_language.phonePlaceholder}
            />
          </Input>

          {isPhoneValid || isPhoneValid === null ? (
            <></>
          ) : (
            <p className={styles.error_msg}>
              {call_card_form_language.errorMsgPhone}
            </p>
          )}
        </div>

        <ButtonWithLoading onClick={handelSubmit} loading={loading}>
          {call_card_form_language.btnCallMe}
        </ButtonWithLoading>
      </div>
    </div>
  );
};

export default Form;
