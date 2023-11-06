import styles from "./UserButton.module.css";
import Image from "next/image";
import { useInfoUser } from "hooks/useInfoUser";
import user_default from "assets/imgs/user_default.webp";
import { useModal } from "hooks/useModal";
import ButtonCircle from "components/UI/ButtonCircle/ButtonCircle";
import { Close } from "components/Icons";
import UserMenu from "components/UI/UserMenu/UserMenu";
import SignOut from "../SignOut/SignOut";

const UserButton = () => {
  const { userPhoto } = useInfoUser();
  const [isOpenMenu, openMenu, closeMenu] = useModal(false);

  return (
    <div className={styles.user_icon}>
      {isOpenMenu ? (
        <div className={styles.wrapper_usermenu}>
          <ButtonCircle size={45} onClick={closeMenu}>
            <Close width={15} height={15} stroke={'#fff'}/>
          </ButtonCircle>
          {isOpenMenu && (
            <UserMenu>
              <SignOut />
            </UserMenu>
          )}
        </div>
      ) : (
        <button className={styles.user_circle} onClick={openMenu}>
          <Image
            src={userPhoto || user_default}
            alt={""}
            width={45}
            height={45}
          />
        </button>
      )}
    </div>
  );
};

export default UserButton;
