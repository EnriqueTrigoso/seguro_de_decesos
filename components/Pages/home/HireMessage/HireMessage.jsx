import styles from "./HireMessage.module.css";
import Image from "next/image";
import banner_desktop from "assets/imgs/banner_desktop.webp";
import banner_mobile from "assets/imgs/banner_mobile.webp";
import Button from "components/UI/Button/Button";
import EvaMovilColor from "components/Logos/EvaMovilColor";
import HireMessageModal from "./HireMessageModal/HireMessageModal";
import { useState } from "react";
import useText from "contexts/TextContext/useText";

const HireMessage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { hire_message_text } = useText();

  return (
    <section className={`${styles.hire_message} container`}>
      {/* <div className={styles.content}>

				<div className={styles.logo_container}>
					<EvaMovilColor />
				</div>

				<p className={styles.title_white}>
					{
						hire_message_text.title1
					}
				</p>

				<p className={styles.title_green}>
					{
						hire_message_text.title2
					}
				</p>

				<div className={styles.button_container}>

					<Button onClick={() => {
						setIsOpenModal(true)
					}}>
						{
							hire_message_text.button
						}
					</Button>

				</div>

			</div> */}

      <Image
        src={banner_desktop}
        alt="Chica sonriendo con un celular en la mano"
        priority={true}
      />

      {isOpenModal && (
        <HireMessageModal
          closeModal={() => {
            setIsOpenModal(false);
          }}
        />
      )}
    </section>
  );
};

export default HireMessage;
