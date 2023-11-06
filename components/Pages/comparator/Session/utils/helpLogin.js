import { verificar_email, POST } from "services/fetching";

export const validData = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let isValidEmail = Boolean(email.match(emailRegex));
  let isValidPassword = Boolean(password);
  return { isValidEmail, isValidPassword };
};

export const verifyEmail = async (email) => {
  const response = await verificar_email(email);
  const { status } = response;
  return status === "exist";
};

export const getDataUser = async (email, password) => {
  const resLogin = await POST("/user/login", {
    email,
    password,
  });
  if (!resLogin.token) return false;
  window.localStorage.setItem("userDataEva", JSON.stringify({ ...resLogin, email: email.toLowerCase() }));
  return true;
};
