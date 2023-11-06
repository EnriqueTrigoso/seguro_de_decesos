import Head from "next/head";
import CookiesPolicy from "components/Pages/cookie-policies/CookiesPolicy";

export const getStaticProps = async ({ locale }) => {
  let cookiesPolicyContent;

  try {
    const cookiesPolicyRes = await import(
      `../../data/Pages/cookie-policies/${locale}/cookies_policy.json`
    );
    cookiesPolicyContent = cookiesPolicyRes.default.cookies_policy;
  } catch (err) {
    cookiesPolicyContent = null;
    // console.log(err);
  }

  return {
    props: {
      cookies_policy: cookiesPolicyContent,
    },
  };
};

const index = ({ cookies_policy }) => {
  return (
    <>
      <Head>
        <title>Políticas de Cookies</title>
        <meta name="description" content="Cookies policy" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="alternate"
          hrefLang="es-ES"
          href="https://www.segurodedecesos.com/cookie-policies"
        />
        <link
          rel="alternate"
          hrefLang="ca"
          href="https://www.segurodedecesos.com/ca/cookie-policies"
        />
        <link
          rel="alternate"
          hrefLang="eu"
          href="https://www.segurodedecesos.com/eu/cookie-policies"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://www.segurodedecesos.com/es/cookie-policies"
        />
      </Head>
      <main style={{ overflow: "hidden", padding: "20px" }}>
        <div className="container">
          <CookiesPolicy cookiesPolicy={cookies_policy} />
        </div>
      </main>
    </>
  );
};

export default index;
