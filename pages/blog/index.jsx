import { getHeroAndFooterText } from "utils/functions";
import Layout from "components/UI/Layout/Layout";
import { fetchArticles } from "@../../services/articles";
import styles from "./blog.module.css";
import {
  ArticleSection,
  OnlineArticleSection,
  HeroArticleSection,
  HomeArticleSection,
} from "components/Pages/blog/View/View";

const Home = (props) => {
  return (
    <Layout content={props} relative="relative">
      <div className={`${styles.blog} container`}>
        {/* <HeroArticleSection articles={props.articles} limit={7} /> */}
        {/* <ArticleSection articles={props.articles} limit={5} /> */}
        {/* <OnlineArticleSection articles={props.articles} limit={4} /> */}
        <HomeArticleSection articles={props.articles} limit={5} />
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async ({ locale }) => {
  const { hero, footer_text, language_selector, navbar_out_session_text } =
    await getHeroAndFooterText(locale);

  const articles = await fetchArticles(`locale=es&sort[0]=id:asc`);

  return {
    props: {
      hero,
      footer_text,
      language_selector,
      navbar_out_session_text,
      articles: articles.data,
    },
  };
};
