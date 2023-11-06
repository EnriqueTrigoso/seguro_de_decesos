import Link from "next/link";
import styles from "./NavBar.module.css";
import { getLogo } from "utils/functions";
import { useLanguage } from "contexts/LanguageContext/useLanguage";
import SessionCircle from "./SessionCircle/SessionCircle";
import { useIsLogin } from "contexts/IsLoginContext/useIsLogin";

const NavBar = () => {
  const { language } = useLanguage();

  const { isLogin } = useIsLogin();
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navbar_wrapper} container`}>
        <div className={styles.logo_container}>
          <Link href={"/"}>{getLogo(language)}</Link>
        </div>
        <div className={styles.right_nav}>
          <SessionCircle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
