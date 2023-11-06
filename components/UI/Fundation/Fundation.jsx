import styles from "./Fundation.module.css";
import FundationCard from "./Card/FundationCard";
import fundation2 from "assets/imgs/fundation2.webp";
import fundation3 from "assets/imgs/fundation3.webp";
import FundationModal from "./FundationModal/FundationModal";
import { useState } from "react";
import useText from "contexts/TextContext/useText";
import TopSection2 from "../TopSection2/TopSection2";

const Fundation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const imgs = [fundation2, fundation3];

  const { solidarity_projects } = useText();

  return (
    <section className={styles.fundation}>
      <div className="container">
        <TopSection2
          title={solidarity_projects.title}
          description={solidarity_projects.description}
        />

        <div className={styles.cards_container}>
          {solidarity_projects.cards.map((card, index) => {
            return (
              <FundationCard
                key={index}
                delay={200 * index}
                img={imgs[index]}
                title={card.title}
                description={card.description}
                url={card.url}
                url_text={card.url_text}
              />
            );
          })}
        </div>

        {isOpen && (
          <FundationModal
            isOpen={isOpen}
            closeModal={() => {
              setIsOpen(false);
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Fundation;
