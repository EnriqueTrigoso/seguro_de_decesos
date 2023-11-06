import { useInfoUser } from "../../../../hooks/useInfoUser";
import LoginButton from "../LoginButton/LoginButton";
import UserButton from "../UserButton/UserButton";

const NavButton = () => {
  const { isLoginUser } = useInfoUser();
  return <>{isLoginUser ? <UserButton /> : <LoginButton />}</>;
};

export default NavButton;
