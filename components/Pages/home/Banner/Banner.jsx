import styles from "./Banner.module.css";
import Image from "next/image";
import banner_desktop from "assets/imgs/11.webp";
import Button from "components/UI/Button/Button";
import { useEffect, useState } from "react";
import useText from "contexts/TextContext/useText";
import Link from "next/link";
import { ArrowRight } from "components/Icons";
import BannerPhoneIco from "components/Icons/BannerPhoneIco";
import BannerMobileIco from "components/Icons/BannerMobileIco";
import { useMediaQuery } from "react-responsive";
import useDesktop from "hooks/useDesktop";

const Banner = () => {

  const { banner } = useText();
  const [fontSize, setFontSize] = useState("16px");
  const { isDesktop } = useDesktop();

  useEffect(() => {
    function handleResize() {
      const container = document.getElementById("contenedor1");
      const width_container = container.offsetWidth;
      const font_size = width_container * 0.15;

      setFontSize(`${font_size}px`);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.Banner}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.details}>
            <h2 className={styles.h2}>{banner.title}</h2>
            <p className={styles.p}>{banner.description}</p>
            <Link href={"/comparator"} title="Comparador">
              <Button
                variant="white"
                icon={<ArrowRight />}
                size={isDesktop ? "xl" : "sm"}
              >
                {banner.button}
              </Button>
            </Link>
          </div>

          <div className={styles.content_image}>
            <div className={styles.phone_container} id="contenedor1">
              <div className={styles.icon_wrapper}>
                <div className={styles.icon}>
                  <BannerPhoneIco />
                </div>
                <span style={{ fontSize }}>{banner.card_text[0]}</span>
              </div>
            </div>

            <div className={styles.mobile_container} id="contenedor2">
              <div className={styles.icon_wrapper}>
                <div className={styles.icon}>
                  <BannerMobileIco />
                </div>
                <span style={{ fontSize }}>{banner.card_text[1]}</span>
              </div>
            </div>

            <Image
              src={banner_desktop}
              alt={banner.metadata.alt}
              title={banner.metadata.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
