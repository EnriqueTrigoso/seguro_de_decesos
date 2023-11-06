import { useEffect, useState } from "react";
import { MultiStep } from "components/UI/Multistep/MultiStep";
import BarStepper from "../BarStepper/BarStepper";
import CircleStepper from "../CircleStepper/CircleStepper";

const Stepper = ({ steps, currentStep, type = "circle" }) => {
  const [newStepsState, setNewStepsState] = useState([]);

  const updateStep = (stepNumber, stepsState) => {
    const newStepsState = [...stepsState];
    let count = 0;

    while (count < newStepsState.length) {
      if (count === stepNumber) {
        newStepsState[count] = {
          ...newStepsState[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newStepsState[count] = {
          ...newStepsState[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newStepsState[count] = {
          ...newStepsState[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newStepsState;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    const newStepsState = updateStep(currentStep - 1, stepsState);

    setNewStepsState(newStepsState);
  }, [steps, currentStep]);

  const displayStepper = (stepperType) => {
    switch (stepperType) {
      case "circle":
        return <MultiStep newStepsState={newStepsState} />;
      case "bar":
        return <BarStepper numberOfSteps={steps.length} step={currentStep} />;
      case "circle-simple":
        return (
          <CircleStepper numberOfSteps={steps.length} step={currentStep} />
        );
    }
  };

  return <>{displayStepper(type)}</>;
};

export default Stepper;
