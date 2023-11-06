import Head from "next/head";
import styles from "./styles.module.css";
import LegalWarning from "components/Pages/legal-warning/LegalWarning";
import { getHeroAndFooterText } from "utils/functions";
import Layout from "components/UI/Layout/Layout";

export const getStaticProps = async ({ locale }) => {
  let legalWarningContent;

  try {
    const legalWarningRes = await import(
      `../../data/Pages/legal-warning/${locale}/legal_warning.json`
    );
    legalWarningContent = legalWarningRes.default.legal_warning;
  } catch (err) {
    legalWarningContent = null;
    console.log(err);
  }

  const { hero, footer_text, language_selector, navbar_out_session_text } =
    await getHeroAndFooterText(locale);

  return {
    props: {
      legalWarningContent,
      hero,
      footer_text,
      language_selector,
      navbar_out_session_text,
    },
  };
};

const index = (props) => {
  return (
    <>
      <Head>
        <title>{props.legalWarningContent.metadata.title}</title>
        <meta
          name="description"
          content={props.legalWarningContent.metadata.description}
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="alternate"
          hrefLang="es-ES"
          href="https://www.segurodedecesos.com/legal-warning"
        />
        <link
          rel="alternate"
          hrefLang="ca"
          href="https://www.segurodedecesos.com/ca/legal-warning"
        />
        <link
          rel="alternate"
          hrefLang="eu"
          href="https://www.segurodedecesos.com/eu/legal-warning"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://www.segurodedecesos.com/es/legal-warning"
        />
      </Head>

      <Layout content={props}>
        <main style={{ overflow: "hidden" }}>
          <div className={`${styles.container} container`}>
            <LegalWarning legalWarningContent={props.legalWarningContent} />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default index;
