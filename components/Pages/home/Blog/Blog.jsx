import styles from "./Blog.module.css";
import Button from "components/UI/Button/Button";
import { processBoldTextMod } from "utils/functions";
import { HomeArticleSection } from "components/Pages/blog/View/View";
import Link from "next/link";
import { ArrowRight } from "components/Icons";
import useDesktop from "hooks/useDesktop";

const Blog = ({ data }) => {
  const { isDesktop } = useDesktop();

  return (
    <section className={`${styles.blog} container`}>
      <div className={styles.header}>
        <h2 className={styles.h2}>
          <strong> En el blog de Eva Seguros</strong> encontrarás variados
          artículos, donde te explicaremos qué es un{" "}
          <strong>seguro de decesos,</strong> cuáles son sus coberturas, cómo
          funciona y{" "}
          <strong style={{ color: "#00983A" }}>
            cómo puedes contratarlo a través de nuestro comparador
          </strong>
        </h2>
        <Link href="/blog">
          <Button
            id={"comparador4"}
            icon={<ArrowRight />}
            variant="primary"
            size={isDesktop ? "xl" : "sm"}
          >
            Ir al blog
          </Button>
        </Link>
      </div>
      <HomeArticleSection articles={data} limit={5} />
    </section>
  );
};

export default Blog;
