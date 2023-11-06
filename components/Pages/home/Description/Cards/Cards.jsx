import styles from "./Cards.module.css";
import consulta1 from "assets/imgs/1.webp";
import consulta2 from "assets/imgs/2.webp";
import consulta3 from "assets/imgs/3.webp";
import consulta4 from "assets/imgs/4.webp";
import Card from "./Card";

const Cards = ({ cards }) => {
  const imgs = [consulta1, consulta2, consulta3, consulta4];

  return (
    <div className={styles.container}>
      <div className={styles.cards_container}>
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              img={imgs[index]}
              text={card.text}
              title={card.title}
              alt={card.alt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
