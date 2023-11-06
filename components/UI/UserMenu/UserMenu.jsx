import { Heart, Home, UserCircle } from "components/Icons";
import Link from "next/link";
import styles from "./UserMenu.module.css";
import useText from "contexts/TextContext/useText";

const UserMenu = ({ children }) => {
  const { user_menu_language } = useText();

  return (
    <div className={styles.user_menu}>
      <div>
        <Link href={"/"}>
          <Home />
          {user_menu_language.start}
        </Link>
        <Link href={"/profile"}>
          <UserCircle />
          {user_menu_language.myData}
        </Link>
        <Link href={"/my-comparisons"}>
          <Heart />
          {user_menu_language.myComparisons}
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default UserMenu;
