import styles from "../blog.module.css";
import { fetchArticles } from "services/articles";
import { postRenderer } from "utils/post-renderer";
import TableOfContents from "components/Pages/blog/TableOfContents/TableOfContents";
import { BottomBar } from "components/Pages/blog/Menu/BottomBar";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { getHeroAndFooterText } from "utils/functions";
import Layout from "components/UI/Layout/Layout";
import Link from "next/link";

const Detail = (props) => {
  const date = new Date(props.article.attributes.publishedAt);
  const formattedDate = format(date, "dd 'de' MMMM 'de' yyyy", { locale: es });
  var image = `${props.article.attributes.cover.data.attributes.url}`;

  return (
    <Layout content={props}>
      <article className={styles.detail_container}>
        <div className="container">
          <div className={styles.header_bar}>
            <Link href="/" className={styles.bar_initial}>
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8.78077 8.00047L5.48096 4.70062L6.42376 3.75781L10.6664 8.00047L6.42376 12.2431L5.48096 11.3003L8.78077 8.00047Z"
                fill="#667085"
              />
            </svg>
            <Link href="/blog" className={styles.bar_initial}>
              Blog
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8.78077 8.00047L5.48096 4.70062L6.42376 3.75781L10.6664 8.00047L6.42376 12.2431L5.48096 11.3003L8.78077 8.00047Z"
                fill="#667085"
              />
            </svg>
            <p className={styles.bar_title}>{props.article.attributes.title}</p>
          </div>
          <div className={styles.hero}>
            <div className={styles.header}>
              <p className={styles.category}>
                {props.article.attributes.categories.data[0].attributes.name}
              </p>
              <h1 className={styles.title}>{props.article.attributes.title}</h1>
              <p className={styles.date}>Publicado el {formattedDate}</p>
              <p className={styles.entrance}>
                {props.article.attributes.entrance}
              </p>
            </div>
            <div
              className={styles.cover}
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
          </div>
          <div className={styles.detail}>
            <TableOfContents
              data={props.article.attributes.blocks.map(
                (section) => section.body
              )}
            />

            <div className={styles.content}>
              {props.article.attributes.blocks.map((section, index) =>
                postRenderer(section, index)
              )}
            </div>
          </div>
        </div>
        <BottomBar />
      </article>
    </Layout>
  );
};

export default Detail;

export async function getStaticPaths() {
  const articles = await fetchArticles("locale=es");

  const paths = articles.data.map((article) => ({
    params: { slug: article.attributes.slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ locale, params }) => {
  const { hero, footer_text, language_selector, navbar_out_session_text } =
    await getHeroAndFooterText(locale);

  const articles = await fetchArticles(
    `locale=es&filters[slug][$eq]=${params.slug}`
  );

  if (!articles.data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      hero,
      footer_text,
      language_selector,
      navbar_out_session_text,
      article: articles.data[0],
    },
    revalidate: 10,
  };
};
