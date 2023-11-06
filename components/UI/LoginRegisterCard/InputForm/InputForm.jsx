import HidePassword from "components/Icons/HidePassword";
import ShowPassword from "components/Icons/ShowPassword";
import InputContainer from "components/UI/InputContainer/InputContainer";
import { useState, forwardRef } from "react";
import styles from "./InputForm.module.css";
import InputMask from "react-input-mask";

const InputForm = forwardRef(
  (
    { title, inputType, placeholder, errorStatus, errorMsg, changeError, mask },
    ref
  ) => {
    const [showPassword, setShowPasswrod] = useState(false);
    const [isPassword] = useState(inputType === "password");

    function setInputType() {
      if (inputType === "password") {
        return showPassword ? "text" : "password";
      }
      return "text";
    }

    return (
      <div>
        <h5 className={styles.input_title}>{title}</h5>
        <InputContainer>
          <div
            className={`${styles.input_wrapper} ${
              errorStatus && styles.error_input
            }`}
          >
            {mask ? (
              <InputMask
                ref={ref}
                type={setInputType()}
                placeholder={placeholder}
                onChange={changeError}
                mask={mask}
                maskChar=""
              />
            ) : (
              <input
                ref={ref}
                type={setInputType()}
                placeholder={placeholder}
                onChange={changeError}
              />
            )}

            <span
              onClick={(e) => {
                if (isPassword) setShowPasswrod((prev) => !prev);
              }}
            >
              {isPassword &&
                (showPassword ? (
                  <HidePassword width={30} height={30} />
                ) : (
                  <ShowPassword width={30} height={30} />
                ))}
            </span>
          </div>
        </InputContainer>
        {errorStatus && <span className={styles.error}>{errorMsg}</span>}
      </div>
    );
  }
);

InputForm.displayName = "InputForm";

export default InputForm;
