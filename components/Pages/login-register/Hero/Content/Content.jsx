import styles from "./Content.module.css";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import SheetOptions from "components/Pages/home/Hero/SheetOptions/SheetOptions";
import { useMediaQuery } from "react-responsive";
import { useLanguage } from "contexts/LanguageContext/useLanguage";
import { processBoldTextMod } from "utils/functions";
import SessionPageWrapper from "components/Pages/login-register/Hero/Content/SessionPageWrapper";
import useText from "contexts/TextContext/useText";

const Content = ({ type }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { domain } = useLanguage();

  const { hero, footer } = useText();

  return (
    <div className={styles.wrapper}>
      {isDesktop && (
        <div className={styles.left}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              {processBoldTextMod(hero.title, {
                fontWeight: "bold",
                color: "#00983A",
              })}
            </h2>
            <SheetOptions list_info={hero.list_info} />
          </div>
        </div>
      )}
      <div className={styles.right}>
        <div className={styles.register_card_container}>
          {<SessionPageWrapper type={type} />}
        </div>
        <div className={styles.footer}>
          <Link href={""}>{footer.privacy_policy}</Link>
          <div>
            <span>{footer.copyright.replace("{domain}", domain)}</span>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
