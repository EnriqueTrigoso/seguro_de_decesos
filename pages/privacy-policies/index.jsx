import Head from "next/head";
import styles from "./styles.module.css";
import PrivacyPolicy from "components/Pages/privacy-policies/PrivacyPolicy";

export const getStaticProps = async ({ locale }) => {
  let privacyPolicyContent;

  try {
    const privacyPolicyRes = await import(
      `../../data/Pages/privacy-policies/${locale}/privacy-policies.json`
    );
    privacyPolicyContent = privacyPolicyRes.default.privacy_policy;
  } catch (err) {
    // console.log(err);
    privacyPolicyContent = null;
  }

  return {
    props: {
      privacy_policy: privacyPolicyContent,
    },
  };
};

const index = ({ privacy_policy }) => {
  return (
    <>
      <Head>
        <title>Políticas de Privacidad</title>
        <meta name="description" content="Políticas de Privacidad" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="alternate"
          hrefLang="es-ES"
          href="https://www.segurodedecesos.com/privacy-policies"
        />
        <link
          rel="alternate"
          hrefLang="ca"
          href="https://www.segurodedecesos.com/ca/privacy-policies"
        />
        <link
          rel="alternate"
          hrefLang="eu"
          href="https://www.segurodedecesos.com/eu/privacy-policies"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://www.segurodedecesos.com/es/privacy-policies"
        />
      </Head>
      <main style={{ overflow: "hidden" }}>
        <div className={`${styles.container} container`}>
          <PrivacyPolicy privacyPolicy={privacy_policy} />
        </div>
      </main>
    </>
  );
};

export default index;
