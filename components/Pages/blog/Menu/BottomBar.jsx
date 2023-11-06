import styles from "./BottomBar.module.css";
import Button from "components/UI/Button/Button";
import Link from "next/link";

export const BottomBar = () => {
  return (
    <div className={styles.fixed}>
      <div className={styles.bottom_bar}>
        <div className="container">
          <div className={styles.ctn_buttons}>
            <Link href={"/comparator"}>
              <Button size="md">Calcula tu seguro de decesos</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
