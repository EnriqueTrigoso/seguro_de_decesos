import TestimonialCard from "./TestimonialCard/TestimonialCard";
import styles from "./Testimonial.module.css";
import testimony1 from "assets/imgs/17.webp";
import testimony2 from "assets/imgs/18.webp";
import testimony3 from "assets/imgs/19.webp";
import { Text18 } from "components/UI/Tags/Texts";
import useText from "contexts/TextContext/useText";
import { processBoldTextMod } from "utils/functions";

const Testimonial = () => {
  const imgs = [testimony1, testimony2, testimony3];

  const { testimonials } = useText();

  return (
    <section className={styles.testimonial}>
      <div className="container">
        <div className={styles.testimonial_wrapper}>
          <div className={styles.content}>
            <h2 className={styles.h2}>{processBoldTextMod(testimonials.title, { color: "#00983A" })}</h2>
            <Text18>{testimonials.description}</Text18>
          </div>

          <div className={styles.cards_container}>
            <div className={styles.cards}>
              {testimonials.cards.map((card, index) => {
                return (
                  <TestimonialCard
                    key={index}
                    img={imgs[index]}
                    alt={card.alt}
                    title={card.title}
                    name={card.name}
                    occupation={card.city}
                    description={card.description}
                    star={5}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
