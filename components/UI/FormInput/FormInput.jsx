import { useState, useEffect } from "react";
import { Text18 } from "../Tags/Texts";
import styles from "./FormInput.module.css";

const FormInput = ({
  title,
  name,
  placeholder,
  errorMessage,
  regex,
  form,
  setForm,
}) => {
  const [info, setInfo] = useState({
    isValid: null,
    value: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      value: value,
    });

    if (!regex) {
      setForm({
        ...form,
        [name]: value,
      });
      return;
    }

    if (!value.match(regex)) {
      setInfo({
        isValid: false,
        value: value,
      });
      setForm({
        ...form,
        [name]: "",
      });
    } else {
      setInfo({
        isValid: true,
        value: value,
      });
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (form[name] === "") return;
    setInfo({
      isValid: true,
      value: form[name],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form[name]]);

  return (
    <div className={styles.input_data}>
      {title && <Text18>{title}</Text18>}
      <div className={styles.input_container}>
        <input
          name={name}
          placeholder={placeholder}
          value={info.value || ''}
          onChange={(e) => handleChange(e)}
        />
      </div>
      {info.isValid || info.isValid === null ? (
        <></>
      ) : (
        <p className={styles.error_message}>{errorMessage}</p>
      )}
    </div>
  );
};

export default FormInput;
