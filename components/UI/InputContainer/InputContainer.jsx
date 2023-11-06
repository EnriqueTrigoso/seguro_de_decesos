import styles from "./InputContainer.module.css";

const InputContainer = (props) => {
  return (
    <div className={styles.input_container} {...props}>
      {props.children}
    </div>
  );
};

export default InputContainer;
