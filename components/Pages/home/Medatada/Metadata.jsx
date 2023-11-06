import useText from "contexts/TextContext/useText";
import Head from "next/head";
import React from "react";

const Metadata = () => {
  
  const { metadata } = useText();

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadata.title} />
      <meta name="keywords" content={metadata.keywords} />
      <meta property="og:image" itemProp="image" content={`${metadata.url + metadata.image}`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:url" content={metadata.url} />
      <meta name='robots' content='index, follow, max-image-preview:large' />

      <link rel="icon" href="/favicon.ico" />

      <link
        rel="canonical"
        href={
          (process.env.NEXT_PUBLIC_ENV !== "development" && metadata.url) || ""
        }
      />

      <link
        rel="alternate"
        hrefLang="es-ES"
        href="https://www.segurodedecesos.com/"
      />
      <link
        rel="alternate"
        hrefLang="ca"
        href="https://www.segurodedecesos.com/ca"
      />
      <link
        rel="alternate"
        hrefLang="eu"
        href="https://www.segurodedecesos.com/eu"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://www.segurodedecesos.com/es"
      />

      {/*
        <meta name='robots' content='index,follow' />
        <meta property="og:description"
          content="Rastreator.com® tu Comparador de Seguros, Telefonía, Finanzas, Viajes y más. Tú eliges el mejor seguro y las mejores tarifas, Rastreator te ayuda a decidir." />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="126549210732766" />
        <meta property="og:title" content="Rastreator.com | Déjate ayudar por el mejor comparador" />

        <meta property="og:image"
          content="https://www.rastreator.com/wp-content/themes/rastreator/assets/img/single/rrss-default.png" />
        <meta property="og:url" content="https://www.rastreator.com/" />
        <meta property="og:image:type" content="image/png" />

        */}
    </Head>
  );
};

export default Metadata;
