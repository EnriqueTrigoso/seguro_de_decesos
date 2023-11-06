import Card from "../Card/Card";
import styles from "./LogosSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

const LogoSlider = ({ logos, logos_metadata }) => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    cssEase: "linear",
    initialSlide: 0,
    pauseOnHover: false,
    responsive: [
      // {
      //   breakpoint: 1440,
      //   settings: {
      //     slidesToShow: 6,
      //   },
      // },
      // {
      //   breakpoint: 1324,
      //   settings: {
      //     slidesToShow: 6,
      //   },
      // },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.slider_wrapper}>
        <Slider ref={sliderRef} {...settings}>
          {logos.map((logoImg, index) => {
            return (
              <Card
                key={index}
                img={logoImg}
                alt={logos_metadata[index].alt}
                title={logos_metadata[index].title}
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default LogoSlider;
