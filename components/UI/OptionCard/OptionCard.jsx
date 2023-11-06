import styles from "./OptionCard.module.css";

const OptionCard = ({
  title,
  name,
  userDataChange,
  nextOrBackStep,
  optionSelected,
}) => {
  const active = name == optionSelected ? styles.active : "";

  return (
    <span
      className={`${styles.option_card} ${active}`}
      onClick={() => {
        userDataChange(name);
        nextOrBackStep("next");
      }}
      name={name}
    >
      {title}
    </span>
  );
};

export default OptionCard;
