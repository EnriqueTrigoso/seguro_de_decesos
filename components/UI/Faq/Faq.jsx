import { Text18 } from "components/UI/Tags/Texts";
import { Title45 } from "components/UI/Tags/Titles";
import styles from "./Faq.module.css";
import FaqCard from "./FaqCard/FaqCard";
import useText from "contexts/TextContext/useText";

const Faq = ({container = true }) => {
  const { faq } = useText();
  return (
    <section className={`${styles.faq} ${container && "container"}`}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.h2}>{faq.title}</h2>
          <Text18>{faq.description}</Text18>
        </div>
        <div className={styles.cards}>
          {faq.questions.map((question, index) => {
            return (
              <FaqCard
                key={index}
                title={question.question}
                content={question.answer}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
