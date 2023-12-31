import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        
        {/* <!-- Google Tag Manager --> */}
        <Script id="tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NLSPDRH2');`}
        </Script>
        {/* <!-- End Google Tag Manager --> */}

      </Head>

      <body>


        {/* <!-- Google Tag Manager (noscript) --> */}

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NLSPDRH2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* <!-- End Google Tag Manager (noscript) --> */}

        <Main />
        <NextScript />

        <div
          dangerouslySetInnerHTML={{
            __html: `
    <script>
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:3682517,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
  `,
          }}
        />
      </body>
    </Html>
  );
}
