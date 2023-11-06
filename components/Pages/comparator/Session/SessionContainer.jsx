import LoginComparador from "./LoginRegister/LoginComparador";
import styles from "./SessionContainer.module.css"
import { useState } from "react";

const SessionContainer = ({ closeModal }) => {
    const [isCardLogin, setIsCardLogin] = useState(true);

    return(
        <div className="modal center" onClick={closeModal}>
            <div className={styles.container}>
                {isCardLogin && <LoginComparador closeModal={closeModal}/>}
            </div>
        </div>
    );
}

export default SessionContainer;
