import TopSection from "components/UI/TopSection/TopSection";
import Cards from "./Cards/Cards";
import styles from "./Description.module.css";
import useText from "contexts/TextContext/useText";

const Description = () => {
  const { information } = useText();

  return (
    <section className={styles.description}>
      <div>
        <div className="container">
          <TopSection
            subtitle={information.title}
            description={information.description}
            button_compare={information.link_compare}
            button_contact={information.link_contact}
            button_href={"/comparator"}
          />
        </div>
        <Cards cards={information.cards} />
      </div>
    </section>
  );
};

export default Description;
