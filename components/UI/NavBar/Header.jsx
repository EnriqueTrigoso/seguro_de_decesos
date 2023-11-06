import styles from "./Header.module.css";
import Link from "next/link";
import EvaSegurosLogo from "components/Logos/EvaSegurosLogo";
import Nav from "./Nav/Nav";
import Button from "components/UI/Button/Button";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useIsLogin } from "contexts/IsLoginContext/useIsLogin";
import UserIcon from "components/Icons/UserIcon";
import Menu from "components/Icons/Menu";
import Image from "next/image";
import UserButton from "./UserButton/UserButton";
import useText from "contexts/TextContext/useText";

const Header = ({ sticky }) => {
  const { isLogin } = useIsLogin();
  const { navbar_out_session_text } = useText();

  return (
    <nav className={styles.navbar} style={{ position: sticky }}>
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.navigation}>
            <div className={styles.logo}>
              <Link href={"/"} aria-label="Logo Eva Seguros">
                <EvaSegurosLogo />
              </Link>
            </div>
            <div className={styles.group}>
              <Nav data={navbar_out_session_text.titles} />
              <div className={styles.group2}>
                <LanguageSelector />
                <MobileMenu />
              </div>

              {isLogin ? (
                <UserButton />
              ) : (
                <>
                  <div className={styles.none}>
                    <Link href={"/comparator"} title="Comparador">
                      <Button id={"comparador1"} variant="secondary" size="md">
                        {navbar_out_session_text.button_text[2]}
                      </Button>
                    </Link>

                    <div className={styles.menu_icon}>
                      <Menu />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
