import React from "react";
import styles from "./MobileMenuCard.module.css";
import Button from "components/UI/Button/Button";
import Link from "next/link";

const MobileMenuCard = () => {
  const options = [
    {
      title: "Vida",
      href: "",
    },
    {
      title: "Hogar",
      href: "",
    },
    {
      title: "Móvil",
      href: "",
    },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.options}>
        {options.map((option, index) => {
          return (
            <p key={index}  className={styles.link}>
              {option.title}
            </p>
          );
        })}
      </div>

      <Link href="/comparator" title="Comparador">
        <Button>Compara ahora</Button>
      </Link>
    </div>
  );
};

export default MobileMenuCard;
