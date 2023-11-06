import styles from "./BarStepper.module.css";

const BarStepper = ({ numberOfSteps, step }) => {
  const barPercent =
    step !== numberOfSteps ? (100 / numberOfSteps) * step : 100;

  return (
    <div className={styles.title_container}>
      <div className={styles.title__top}>
        <h1 className={styles.title}>PÓLIZA DE VIDA</h1>
        <p className={styles.steps}>
          pasos {step} de {numberOfSteps}
        </p>
      </div>

      <div className={styles.step_bar}>
        <div
          className={styles.completed_step_bar}
          style={{ width: `${barPercent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default BarStepper;
