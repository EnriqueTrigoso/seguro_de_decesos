import React from "react";
import styles from "./CloseMenuButton.module.css";
import ButtonCircle from "components/UI/ButtonCircle/ButtonCircle";
import { Close } from "components/Icons";
import UserMenu from "components/UI/UserMenu/UserMenu";
import SignOut from "../SignOut/SignOut";

const CloseMenuButton = ({ isOpenMenu, closeMenu }) => {
  return (
    <div className={styles.wrapper_usermenu}>
      <ButtonCircle size={45} onClick={closeMenu}>
        <Close width={15} height={15} stroke={'#fff'} />
      </ButtonCircle>
      {isOpenMenu && (
        <UserMenu>
          <SignOut closeMenu={closeMenu} />
        </UserMenu>
      )}
    </div>
  );
};

export default CloseMenuButton;
