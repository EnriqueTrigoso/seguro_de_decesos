import { Text18 } from "components/UI/Tags/Texts";
import { RegisterContext } from "contexts/RegisterContext";
import { useContext } from "react";
import styles from "./InputData.module.css";

const InputData = ({ title, dataKey }) => {
  const { dataUser, setDataUser } = useContext(RegisterContext);

  return (
    <div className={styles.input_data}>
      <Text18>{title}</Text18>

      <div className={styles.input_container}>
        <input
          value={dataUser[dataKey] || ""}
          type="text"
          onChange={(e) => {
            setDataUser({ ...dataUser, [dataKey]: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default InputData;
