import styles from "./Loader2.module.css";
import ReactDOM from "react-dom";
import useText from "contexts/TextContext/useText";
import Image from "next/image";
import ImageHero from "../../../../assets/imgs/16.webp";
import Cards from "./Cards";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Loader2 = () => {
  const { Loader2Text } = useText();

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    cssEase: "linear",
    initialSlide: 0,
    pauseOnHover: false,
  };

  return ReactDOM.createPortal(
    <section className={styles.fixed}>
      <div className={styles.hero}>
        <div className={styles.image_wrapper}>
          <div className={styles.image}>
            <Cards />
            <Image src={ImageHero} alt="" />
          </div>
        </div>

        <div className={styles.text_contain}>
          
          <div>
            <Slider ref={sliderRef} {...settings}>
              <div className={`${styles.content} ${styles.slider}`}>
                <div>
                  <h2 className={`${styles.h2} ${styles.colorblue}`}>
                    {Loader2Text.slider_text[0][0]} <br />{" "}
                    {Loader2Text.slider_text[0][1]}{" "}
                  </h2>
                  <h2 className={`${styles.h2} ${styles.colorgreen}`}>
                    {Loader2Text.slider_text[0][2]} <br />{" "}
                    {Loader2Text.slider_text[0][3]}{" "}
                  </h2>
                </div>
              </div>

              <div className={`${styles.content} ${styles.slider}`}>
                <div>
                  <h2 className={`${styles.h2} ${styles.colorblue}`}>
                    {Loader2Text.slider_text[1][0]}
                    <br />
                    {Loader2Text.slider_text[1][1]}
                  </h2>
                  <h2 className={`${styles.h2} ${styles.colorgreen}`}>
                    {Loader2Text.slider_text[1][2]} <br />{" "}
                    {Loader2Text.slider_text[1][3]}
                    <br /> {Loader2Text.slider_text[1][4]}
                  </h2>
                </div>
              </div>
            </Slider>
          </div>

          <span class={styles.loader}></span>
        </div>
      </div>
    </section>,
    document.getElementById("modal")
  );
};

export default Loader2;
