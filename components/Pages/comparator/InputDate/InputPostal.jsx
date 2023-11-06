import DNI from "components/Icons/DNI";
import FormInputContainerWithIcon from "components/UI/FormInputContainerWithIcon/FormInputContainerWithIcon";
import InputCardWrapper from "components/UI/InputCardWrapper/InputCardWrapper";
import { StepperContext } from "contexts/StepperContext";
import useText from "contexts/TextContext/useText";
import { useContext, useState } from "react";
import InputMask from "react-input-mask";
import { POST } from "services/fetching";

const regexPostalCode = /^[0-9]{5}$/g;

const InputPostal = () => {
  const { userData, setUserData, setShowRightButton } =
    useContext(StepperContext);
  const [postal_code, setPostalCode] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [verify, setVerify] = useState(false);
  const { inputpostaltext } = useText();

  const validatePostalCode = async (postal_code) => {

    try {
      const res = await POST("/user/verify_postal_code_spain", { postal_code });

      if ("cities" in res) {
        return { isValidPostalCode: true, city: res.cities[0].city_name };
      } else {
        return { isValidPostalCode: false, city: "" };
      }
    } catch (err) {
      // console.log(err)
    }
  };

  const handleChange = async (e) => {
    const { value } = e.target;

    let isFiveDigits = Boolean(value.match(regexPostalCode));

    setPostalCode(value);
    setShowRightButton(false);

    setUserData({ ...userData, postal_code_valid: false });

    if (isFiveDigits) {
      setIsValid(false);
      setVerify(true);
      setErrorMsg(inputpostaltext.verify_msg);

      console.log(value, "value");

      let { isValidPostalCode, city } = await validatePostalCode(value);

      setErrorMsg(city);
      setVerify(false);
      setIsValid(isValidPostalCode);

      if (!isValidPostalCode) {
        setErrorMsg(inputpostaltext.fail_msg);
        return;
      }

      setUserData({ ...userData, postal_code_valid: true });
      setUserData({ ...userData, postal_code: value });
      setShowRightButton(true);
    } else {
      setIsValid(false);
      setVerify(false);
      setErrorMsg(inputpostaltext.error_msg);
    }
  };

  const errorMessageStyle = {
    color: "#f55353",
    fontSize: "14px",
    fontWeight: "500",
  };

  const verifyMessageStyle = {
    color: "#00983A",
    fontSize: "14px",
    fontWeight: "500",
  };

  return (
    <InputCardWrapper title={inputpostaltext.title}>
      <FormInputContainerWithIcon>
        <InputMask
          onChange={(e) => handleChange(e)}
          mask="99999"
          maskChar=""
          placeholder={inputpostaltext.placeholder}
          value={postal_code}
        />
        <DNI />
      </FormInputContainerWithIcon>
      {isValid || isValid === null ? (
        <></>
      ) : (
        <p style={verify ? verifyMessageStyle : errorMessageStyle}>
          {errorMsg}
        </p>
      )}

      {isValid && !verify && <p style={verifyMessageStyle}>{errorMsg}</p>}
    </InputCardWrapper>
  );
};

export default InputPostal;
