import Stepper from "components/UI/Stepper/Stepper";
import StepperControl from "components/UI/StepperControl/StepperControl";
import { StepperContext } from "contexts/StepperContext";
import styles from "./DecesosForm.module.css";
import { Step1, Step2, Step3, Step4 } from "components/Pages/comparator/Steps";
import { useState } from "react";
import Faq from "components/UI/Faq/Faq";

const DecesosForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [showLeftButton, setShowLeftButton] = useState(true);
  const [showRightButton, setShowRightButton] = useState(true);

  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 />;

      case 2:
        return <Step2 />;

      case 3:
        return <Step3 />;

      case 4:
        return <Step4 />;

      default:
        break;
    }
  };

  const nextOrBackStep = (direction) => {
    let newStep = currentStep;
    direction == "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              nextOrBackStep,
              setShowLeftButton,
              setShowRightButton,
            }}
          >
            <div className={styles.grid}>
              <div className={styles.stepper_container}>
                <Stepper steps={steps} currentStep={currentStep} />
              </div>

              <div className={styles.content}>
                {displayStep(currentStep)}
                <StepperControl
                  showLeftButton={showLeftButton}
                  showRightButton={showRightButton}
                  nextOrBackStep={nextOrBackStep}
                  currentStep={currentStep}
                  steps={steps}
                />
              </div>
            </div>
          </StepperContext.Provider>
        </div>

        <Faq container={false} />
      </div>
    </div>
  );
};

export default DecesosForm;
