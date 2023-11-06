import styles from "./Card.module.css";
import Image from "next/image";
import { AngleDown, AngleUp, Spot } from "components/Icons";
import { Fragment, useEffect, useState } from "react";
import useText from "contexts/TextContext/useText";
import Button from "components/UI/Button/Button";

const Card = ({ name, image, type, price, openModal, description }) => {
  const { CardContentText, display_text } = useText();

  const [showMore, setShowMore] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(description.slice(0, showMore ? description.length : 3));
  }, [showMore, description]);

  return (
    <div className={styles.transfer_card}>
      {image && <Image src={image} width={135} alt={""} />}
      <div>
        <p className={styles.price_title}>{type}</p>
        <p className={styles.price}>{price} €</p>
      </div>
      <ul>
        {list.map((element, index) => {
          return (
            <li key={index}>
              <Spot width={12} height={23} />
              {element}
            </li>
          );
        })}
      </ul>
      <div className={styles.buttons_container}>
        <Button variant="secondary" onClick={openModal}>
          {CardContentText.button_text}
        </Button>
      </div>
    </div>
  );
};

export default Card;
