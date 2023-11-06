import styles from "./View.module.css";
import Card from "components/Pages/blog/Card/Card";

export const ArticleSection = ({ articles, limit }) => {
  const limitedArticles = articles.slice(0, limit);

  return (
    <div className={styles.default_view}>
      {limitedArticles.map((article, index) =>
        index === 0 ? (
          <Card
            key={index}
            aspect_ratio={index === 0 ? "aspect_ratio_presentation" : ""}
            data={article}
          />
        ) : null
      )}
      <div className={styles.grid}>
        {limitedArticles.map((article, index) =>
          index !== 0 ? <Card key={index} data={article} /> : null
        )}
      </div>
    </div>
  );
};

export const OnlineArticleSection = ({ articles, limit }) => {
  const limitedArticles = articles.slice(0, limit);

  return (
    <div className={styles.online_article_section}>
      {limitedArticles.map((article, index) => (
        <Card key={index} data={article} />
      ))}
    </div>
  );
};

export const HeroArticleSection = ({ articles, limit }) => {
  const limitedArticles = articles.slice(0, limit);

  return (
    <div className={styles.hero_article_section}>
      <div className={styles.news}></div>
      <div className={styles.list}>
        <div className={styles.hero_article_section_grid}>
          {limitedArticles.map((article, index) => (
            <Card key={index} data={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const HomeArticleSection = ({ articles, limit }) => {
  const limitedArticles = articles.slice(0, limit);

  return (
    <div className={styles.homearticlesection}>
      {limitedArticles.map((article, index) => (
        <Card
          key={index}
          data={article}
          ratio={
            index === 0
              ? 3.064
              : index === 1
              ? 2.843
              : index === 4
              ? 2.322
              : 2.551
          }
        />
      ))}
    </div>
  );
};
