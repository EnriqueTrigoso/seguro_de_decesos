import styles from "./Nav.module.css";
import Link from "next/link";
const Nav = ({ data }) => {
  return (
    <ul className={styles.nav}>
      {data.map((item, index) => (
        <li key={index}>
          <Link href="/">{item}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
