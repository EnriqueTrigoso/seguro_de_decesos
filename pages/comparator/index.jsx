import NavBar from "components/Pages/comparator/NavBar/NavBar";
import StickyButtons from "components/Pages/comparator/StickyButtons/StickyButtons";
import styles from "./Comparator.module.css";
import Head from "next/head";
import { useLanguage } from "contexts/LanguageContext/useLanguage";
import DecesosForm from "components/Pages/comparator/DecesosForm/DecesosForm";
import Detail from "components/Pages/comparator/Detail/Detail";
import { LoginRegisterModalProvider } from "components/Pages/comparator/context/LoginRegisterModalContext/LoginRegisterModalProvider";
import { IsLoginProvider } from "contexts/IsLoginContext/IsLoginProvider";
import TextProvider from "contexts/TextContext/TextProvider";

export async function getStaticProps({ locale }) {
  const sections = [
    "metadata",
    "step1text",
    "step2text",
    "step3text",
    "step4text",
    "inputdatetext",
    "inputpostaltext",
    "steppercontroltext",
    "detail",
    "email_modal",
  ];

  const general_sections = [
    ["stickybuttons", "btn_help_language"],
    // ["cookies", "banner_language"],
    // ["navbar", "navbar_out_session_text"],
    ["usermenu", "user_menu_language"],
    ["stickybuttons", "call_card_form_language"],
    // ["modalstyle2", "modal_style2_text"],
    ["stickybuttons", "help_card_language"],
  ];

  const login_sections = [
    // "metadata_register",
    // "hero",
    // "footer",
    "logincardtext",
    // "navbarloggintext",
    // "sendemailverifymodaltext"
  ];

  const home_sections = ["faq"];

  const promises = sections.map(async (section) => {
    try {
      const response = await import(
        `../../data/Pages/comparator/${locale}/${section}.json`
      );
      return response.default;
    } catch (err) {
      // console.log(err);
      return null;
    }
  });

  const promises2 = general_sections.map(async ([section, file]) => {
    try {
      const response = await import(
        `../../data/General/${section}/${locale}/${file}.json`
      );
      return response.default;
    } catch (err) {
      // console.log(err);
      return null;
    }
  });

  const promises3 = login_sections.map(async (section) => {
    try {
      const response = await import(
        `../../data/Pages/login/${locale}/${section}.json`
      );

      return response.default;
    } catch (err) {
      // console.log(err);
      return null;
    }
  });

  const promises4 = home_sections.map(async (section) => {
    try {
      const response = await import(
        `../../data/Pages/home/${locale}/${section}.json`
      );
      return response.default[section];
    } catch (err) {
      // console.log(err);
      return null;
    }
  });

  const [
    metadata,
    step1text,
    step2text,
    step3text,
    step4text,
    inputdatetext,
    inputpostaltext,
    steppercontroltext,
    detail,
    email_modal,
    btn_help_language,
    user_menu_language,
    call_card_form_language,
    help_card_language,
    logincardtext,
    faq,
  ] = await Promise.all([
    ...promises,
    ...promises2,
    ...promises3,
    ...promises4
  ]);

  return {
    props: {
      metadata,
      step1text,
      step2text,
      step3text,
      step4text,
      inputdatetext,
      inputpostaltext,
      steppercontroltext,
      detail,
      email_modal,
      btn_help_language,
      user_menu_language,
      call_card_form_language,
      help_card_language,
      logincardtext,
      faq,
    },
  };
}

const DecesosComparador = (props) => {

  return (
    <>
      <Head>
        <title>{props.metadata.title}</title>
        <meta name="description" content={props.metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="alternate"
          hrefLang="es-ES"
          href="https://www.segurodedecesos.com/comparator"
        />
        <link
          rel="alternate"
          hrefLang="ca"
          href="https://www.segurodedecesos.com/ca/comparator"
        />
        <link
          rel="alternate"
          hrefLang="eu"
          href="https://www.segurodedecesos.com/eu/comparator"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://www.segurodedecesos.com/es/comparator"
        />
      </Head>

      <main>
        <section className={styles.form_wrapper}>
          <TextProvider content={props}>
            <LoginRegisterModalProvider>
              <IsLoginProvider>
                <NavBar />
                <div className={styles.container}>
                  <Detail />
                  <DecesosForm />
                </div>
              </IsLoginProvider>
            </LoginRegisterModalProvider>
            <StickyButtons />
          </TextProvider>
        </section>
      </main>
    </>
  );
};

export default DecesosComparador;
