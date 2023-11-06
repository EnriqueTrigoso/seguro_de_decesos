import styles from "./FundationModal.module.css";
import { Spot } from "components/Icons";
import { Title45 } from "components/UI/Tags/Titles";
// import universo_santi from "assets/imgs/universo_santi.png";
// import reforestando_andalucia from "assets/imgs/reforestando_andalucia.png";
// import tree_reforestando_andalucia from "assets/imgs/tree_reforestando_andalucia.png";
// import people_universo_santi from "assets/imgs/people_universo_santi.png";
import Image from "next/image";
import Button from "components/UI/Button/Button";
import ModalStyle2 from "components/UI/ModalStyle2/ModalStyle2";
import useText from "contexts/TextContext/useText";

const FundationModal = ({ closeModal }) => {
  const url = {
    universo_santi: "https://universosanti.com/",
    reforesando_andalucia: "https://www.plant-for-the-planet.org/es/andalucia/",
  };

  const { solidarity_project_modal } = useText();

  // useEffect(() => {
  //   console.log('entrndo aqui fundarion modal')
  //   document.body.style.overflow = 'hidden'

  //   return () => {
  //     document.body.style.overflow = 'unset'
  //   };
  // }, []);

  return (
    <ModalStyle2 closeModal={closeModal}>
      <div className={`${styles.fundation_card_content} ${styles.reverse}`}>
        <div className={styles.company_description}>
          <div>
            <div className={styles.company}>
              {/* <Image src={universo_santi} alt="" /> */}
              <div>
                <Title45 style={{ marginBottom: "7px" }}>
                  {solidarity_project_modal.cards[0].title}
                </Title45>
                <a
                  className={styles.link}
                  href={url["universo_santi"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://universosanti.com/
                </a>
              </div>
            </div>
            <p className={styles.description}>
              {solidarity_project_modal.cards[0].description}
            </p>
            <a
              href={url["universo_santi"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>{solidarity_project_modal.cards[0].button_text}</Button>
            </a>
          </div>
        </div>
        {/* <Image src={people_universo_santi} alt="" /> */}
      </div>

      <div className={styles.fundation_card_content}>
        <div className={styles.company_description}>
          <div>
            <div className={styles.company}>
              {/* <Image src={reforestando_andalucia} alt="" /> */}
              <div>
                <Title45 style={{ marginBottom: "7px" }}>
                  {solidarity_project_modal.cards[1].title}
                </Title45>
                <a
                  className={styles.link}
                  href={url["reforesando_andalucia"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plant-for-the-planet.org/es/andalucia
                </a>
              </div>
            </div>
            <p className={styles.description}>
              {solidarity_project_modal.cards[1].description}
            </p>
            <div>
              {solidarity_project_modal.cards[1].options.map((option, i) => {
                return (
                  <div key={i} className={styles.option}>
                    <Spot />
                    <p>{option}</p>
                  </div>
                );
              })}
            </div>
            <a
              href={url["reforesando_andalucia"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>{solidarity_project_modal.cards[1].button_text}</Button>
            </a>
          </div>
        </div>
        {/* <Image src={tree_reforestando_andalucia} alt="" /> */}
      </div>
    </ModalStyle2>
  );
};

export default FundationModal;
