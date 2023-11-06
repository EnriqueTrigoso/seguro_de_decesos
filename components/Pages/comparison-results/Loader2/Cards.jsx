import FacebookSocialIcon from "components/Icons/FacebookSocialIcon";
import InstagramSocialIcon from "components/Icons/InstagramSocialIcon";
import Messenger from "components/Icons/Messenger";
import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import useText from "contexts/TextContext/useText";

const Cards = () => {
  const [fontSize, setFontSize] = useState("16px");
  const { Loader2Text } = useText();

  useEffect(() => {
    function handleResize() {
      const container = document.getElementById("card_container");
      const width_container = container.offsetWidth;
      const font_size = width_container * 0.048;

      setFontSize(`${font_size}px`);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.container1} id="card_container">
        <div className={styles.content_wrapper}>
          <div className={styles.icon}>
            <Messenger />
          </div>
          <span className={styles.text} style={{ fontSize }}>
            {Loader2Text.cards[0]}
          </span>
        </div>
      </div>

      <div className={styles.container1}>
        <div className={styles.content_wrapper}>
          <div className={styles.icon}>
            <FacebookSocialIcon />
          </div>
          <span className={styles.text} style={{ fontSize }}>
            {Loader2Text.cards[1]}
          </span>
        </div>
      </div>

      <div className={styles.container1}>
        <div className={styles.content_wrapper}>
          <div className={styles.icon}>
            <InstagramSocialIcon />
          </div>
          <span className={styles.text} style={{ fontSize }}>
            {Loader2Text.cards[2]}
          </span>
        </div>
      </div>
    </>
  );
};

export default Cards;
