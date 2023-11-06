import ModalStyle2 from "components/UI/ModalStyle2/ModalStyle2";
import { Title45 } from "components/UI/Tags/Titles";
import Image from "next/image";
import styles from "components/UI/Fundation/FundationModal/FundationModal.module.css";
import free_line from "assets/imgs/free_line.webp";
import { useContent } from "hooks/useContent";

const HireMessageModal = ({ closeModal }) => {

  const { content } = useContent({ page: "home", section: "hire_message_modal" })
  
  if (!content) {
    return null
  }

  return (
    <ModalStyle2 closeModal={closeModal}>
      <div className={`${styles.fundation_card_content} ${styles.reverse}`}>
        <div className={styles.company_description}>
          <div>
            <div className={styles.company}>
              <div>
                <Title45 style={{ marginBottom: "7px" }}>
                  {content.title}
                </Title45>
              </div>
            </div>
            <p className={styles.description}>
              {content.description1[0]}
              <br />
              <br />
              {content.description1[1]}
            </p>

            <p className={styles.description2}>
              {content.description2[0]}
              <br />
              <br />
              {content.description2[1]}
            </p>
          </div>
        </div>
        <Image src={free_line} alt="Joven muy contenta con un celular en la mano" />
      </div>
    </ModalStyle2>
  );
};

export default HireMessageModal;
