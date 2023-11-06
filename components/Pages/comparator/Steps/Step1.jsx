import OptionsCards from "components/Pages/comparator/OptionsCards/OptionsCards";
import styles from "./Steps.module.css";
import StepTitle from "../StepTitle/StepTitle";
import { StepperContext } from "contexts/StepperContext";
import { useContext, useEffect } from "react";
import useText from "contexts/TextContext/useText";

const Step1 = () => {
  const { setShowLeftButton, setShowRightButton } = useContext(StepperContext);
  const { step1text } = useText();


  useEffect(() => {
    setShowLeftButton(false);
    setShowRightButton(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.step_container}>
      <StepTitle title={step1text.title} subtitle={step1text.subtitle} />
      <OptionsCards
        userDataKey="current_insurance"
        options={step1text.option_cards}
      />
    </div>
  );
};

export default Step1;
