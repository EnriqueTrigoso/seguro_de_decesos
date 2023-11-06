import { useState, useEffect } from "react";

export const useInfoUser = () => {
  const [isLoginUser, setIsLoginUser] = useState(null);
  const [userData, setUserData] = useState({});
  const [userPhoto, setUserPhoto] = useState("");

  useEffect(() => {
    let userInfo = JSON.parse(window.localStorage.getItem("userDataEva"));
    let isLogin = Boolean(userInfo);
    setIsLoginUser(isLogin);
    if (!isLogin) return;

    setUserData(userInfo);
    setUserPhoto(userInfo["photo"]);
  }, []);

  return {isLoginUser, userData, userPhoto};
};
