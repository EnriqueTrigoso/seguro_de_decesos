import UserWithFunctionality from "components/UI/UserWithFunctionality/UserWithFunctionality";
import { useModal } from "hooks/useModal";
import CloseMenuButton from "../CloseMenuButton/CloseMenuButton";
import AvatarButton from "../AvatarButton/AvatarButton";
import { useIsLogin } from "contexts/IsLoginContext/useIsLogin";

const SessionCircle = () => {
  const { isLogin } = useIsLogin();
  const [isOpenMenu, openMenu, closeMenu] = useModal(false);

  return isLogin ? (
    <>
      {isOpenMenu ? (
        <CloseMenuButton isOpenMenu={isOpenMenu} closeMenu={closeMenu} />
      ) : (
        <AvatarButton openMenu={openMenu} closeMenu={closeMenu} />
      )}
    </>
  ) : (
    <UserWithFunctionality />
  );
};

export default SessionCircle;
