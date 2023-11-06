import { useState, useRef } from "react";
import { validData, verifyEmail, getDataUser } from "../utils/helpLogin";

export const useLogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    isValidEmail: null,
    isValidPassword: null,
  });

  const login = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const { isValidEmail, isValidPassword } = validData(email, password);
    setErrors({
      isValidEmail,
      isValidPassword,
    });
    if (!isValidEmail || !isValidPassword) return false;

    setLoading(true);
    const emailExists = await verifyEmail(email);
    setErrors({
      ...errors,
      isValidEmail: emailExists,
    });
    if (!emailExists) {
      setLoading(false);
      return false;
    }

    let getUser = await getDataUser(email, password);
    setErrors({
      ...errors,
      isValidPassword: getUser,
    });
    if (!getUser) {
      setLoading(false);
      return false;
    }

    setLoading(false);
    return true;
  };

  return {
    emailRef,
    passwordRef,
    loading,
    isValidEmail: errors.isValidEmail,
    isValidPassword: errors.isValidPassword,
    login,
  };
};
