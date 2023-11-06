import styles from "./Hero.module.css";
import NavBar from "components/Pages/comparator/NavBar/NavBar";
import { useTypeInsurance } from "../hooks/useTypesInsurance";
import Card from "../Card/Card";
import CallCardForm from "components/UI/CallCardForm/CallCardForm";
import CardHeader from "../CardHeader/CardHeader";
import { useMediaQuery } from "react-responsive";
import Loader2 from "../Loader2/Loader2";
import { registerAndLoginUser } from "utils/functions";
import { useEffect, useState } from "react";
import { useLanguage } from "contexts/LanguageContext/useLanguage";
import { useRouter } from "next/router";
import useDesktop from "hooks/useDesktop";

const Hero = ({ params }) => {
  const { domainIndex } = useLanguage();
  const router = useRouter();

  const {
    isLoadingContent,
    typesInsurance,
    isOpenCallCard,
    openCallCard,
    closeModalFromCallCard,
    setStartFetching,
  } = useTypeInsurance();

  const { isDesktop } = useDesktop();

  useEffect(() => {
    async function fetchData() {
      const result = await registerAndLoginUser(params, domainIndex);

      if (!result) {
        router.push("/");
      } else {
        setStartFetching(true);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.hero}>
      <NavBar />

      <div className="container">
        {isLoadingContent && <Loader2 />}

        <div className={styles.card_container}>
          {isDesktop && <CardHeader />}

          {typesInsurance.map((insurance, index) => {
            return (
              <Card
                key={index}
                name={insurance.name}
                image={insurance.image}
                type={insurance.type}
                price={insurance.price}
                openModal={openCallCard}
                description={insurance.description}
              />
            );
          })}
        </div>

        {isOpenCallCard && (
          <CallCardForm
            setOpenModal={closeModalFromCallCard}
            setModalType={() => {}}
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
