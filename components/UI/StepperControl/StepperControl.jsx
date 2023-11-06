import Button from "components/UI/Button/Button";
import styles from "./StepperControl.module.css";
import { useLanguage } from "contexts/LanguageContext/useLanguage";
import { StepperContext } from "contexts/StepperContext";
import { useContext, useEffect } from "react";
import { useLoginRegisterModal } from "components/Pages/comparator/context/LoginRegisterModalContext/useLoginRegisterModal";
import { useRouter } from "next/router";
import { GET, POST } from "services/fetching";
import useText from "contexts/TextContext/useText";
import useDesktop from "hooks/useDesktop";

const StepperControl = ({
  showLeftButton,
  showRightButton,
  nextOrBackStep,
  currentStep,
  steps,
}) => {
  const { domainIndex } = useLanguage();
  const { steppercontroltext } = useText();
  const { setIsOpenModal, sendData } = useLoginRegisterModal();
  const { userData } = useContext(StepperContext);
  const route = useRouter();

  const { isDesktop } = useDesktop();

  const next_button_text =
    currentStep === steps.length
      ? steppercontroltext.finalButton
      : steppercontroltext.nextButton;
  const finalStep = currentStep === steps.length ? true : false;

  const handleSend = async () => {
    const params = new URLSearchParams(window.location.search);

    let name = params.get("name");
    let email = params.get("email");
    let phone = params.get("phone");

    let isUserLoggin;

    if (name && email && phone) {
      email = email.trim().toLowerCase();

      isUserLoggin =
        JSON.parse(window.localStorage.getItem("userDataEva")) || false;

      // Cerrando Sesion si hay una cuenta iniciada
      if (isUserLoggin) {
        const logOut = await GET(isUserLoggin.token, "/user/logout");
        window.localStorage.removeItem("userDataEva");
        isUserLoggin = null;
      }

      // Creando cuenta con los parametros de la ruta
      const emailJson = await POST("/user/register", {
        email,
        domain: domainIndex,
      });

      if (emailJson.status === "ok") {
        window.localStorage.setItem(
          "userDataEva",
          JSON.stringify({ ...emailJson, email })
        );
        isUserLoggin = emailJson;
      }
    } else {
      isUserLoggin =
        JSON.parse(window.localStorage.getItem("userDataEva")) || false;

      if (!isUserLoggin) {
        setIsOpenModal(true);
        return;
      }
    }

    const { ages, postal_code } = userData;

    const birthdates = Object.values(ages).map((birthdate) => {
      return birthdate.split("/").join("-");
    });

    window.localStorage.setItem(
      "formData",
      JSON.stringify({
        postal_code,
        birthdates,
      })
    );

    const transactionId = params.get("track");
    const results_url =
      "/comparison-results" + (transactionId ? `?track=${transactionId}` : "");

    // if (transactionId){
    //   sendPixelPostback(transactionId)
    // }

    route.push(results_url);
  };

  useEffect(() => {
    if (sendData) {
      handleSend();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendData]);

  return (
    <>
      <div className={styles.buttons}>
        {showLeftButton && (
          <div className={styles.left_button}>
            <Button
              variant="primary"
              size={isDesktop ? "xl" : "l"}
              onClick={() => {
                nextOrBackStep();
              }}
            >
              {steppercontroltext.backButton}
            </Button>
          </div>
        )}

        {!finalStep
          ? showRightButton && (
              <div className={styles.right_button}>
                <Button
                  variant="primary"
                  size={isDesktop ? "xl" : "l"}
                  onClick={() => {
                    nextOrBackStep("next");
                  }}
                >
                  {next_button_text}
                </Button>
              </div>
            )
          : showRightButton && (
              <div className={styles.right_button}>
                <Button variant="secondary" onClick={handleSend}>
                  {next_button_text}
                </Button>
              </div>
            )}
      </div>
    </>
  );
};

export default StepperControl;
