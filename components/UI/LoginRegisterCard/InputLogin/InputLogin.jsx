import HidePassword from "components/Icons/HidePassword";
import ShowPassword from "components/Icons/ShowPassword";
import InputContainer from "components/UI/InputContainer/InputContainer";
import { useState, forwardRef } from "react";
import styles from "./InputLogin.module.css";
import { useMediaQuery } from "react-responsive";

const InputLogin = forwardRef(
  ({ type, title, placeholder, LeftIcon = null }, ref) => {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const [inputText, setInputText] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const getPlaceholder = () => {
      if (typeof placeholder === "object") {
        if (isDesktop) {
          return placeholder[0];
        }

        return placeholder[1];
      }

      return placeholder;
    };

    const inputType = () => {
      if (type === "password") {
        return showPassword ? "text" : "password";
      }
      return "text";
    };

    return (
      <>
        <h5 className={styles.correo_title}>{title}</h5>
        <InputContainer>
          <div className={styles.input_wrapper}>
            <input
              ref={ref}
              type={inputType()}
              placeholder={getPlaceholder()}
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />

            <span
              className={styles.icon}
              onClick={
                type === "password"
                  ? () => {
                      setShowPassword((prev) => !prev);
                    }
                  : null
              }
            >
              {type === "password" ? (
                showPassword ? (
                  <HidePassword width={30} height={30} />
                ) : (
                  <ShowPassword width={30} height={30} />
                )
              ) : (
                isDesktop && LeftIcon && <LeftIcon />
              )}
            </span>
          </div>
        </InputContainer>
      </>
    );
  }
);

InputLogin.displayName = "InputLogin";

export default InputLogin;
