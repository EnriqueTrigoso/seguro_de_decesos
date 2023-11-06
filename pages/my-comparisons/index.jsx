import Hero from "components/Pages/my-comparisons/Hero/Hero";
import Faq from "components/UI/Faq/Faq";
import Footer from "components/UI/Footer/Footer";
import Head from "next/head";
import useVerifySession from "hooks/useVerifySession";
import { useRouter } from "next/router";
import TextProvider from "contexts/TextContext/TextProvider";

export async function getStaticProps({ locale }) {
  const sections = ["language_selector", "faq", "footer_text"];

  const mis_datos_section = ["comparativelanguage"];

  const general_sections = [
    ["navbar", "navbar_out_session_text"],
    ["usermenu", "user_menu_language"],
  ];

  const user_panel_sections = [
    "comparative_user_panel_language",
    "card_user_panelLanguage",
  ];

  const promises = sections.map(async (section) => {
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

  const promises2 = mis_datos_section.map(async (section) => {
    try {
      const response = await import(
        `../../data/Pages/profile/${locale}/${section}.json`
      );
      return response.default;
    } catch (err) {
      // console.log(err);
      return null;
    }
  });

  const promises3 = general_sections.map(async ([section, file]) => {
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

  const promises4 = user_panel_sections.map(async (section) => {
    try {
      const response = await import(
        `../../data/Pages/user-panel/${locale}/${section}.json`
      );
      return response.default;
    } catch (err) {
      // console.log(err);
      return null;
    }
  });

  const [
    language_selector,
    faq,
    footer_text,
    comparativelanguage,
    navbar_out_session_text,
    user_menu_language,
    comparative_user_panel_language,
    card_user_panelLanguage,
  ] = await Promise.all([
    ...promises,
    ...promises2,
    ...promises3,
    ...promises4,
  ]);

  return {
    props: {
      language_selector,
      faq,
      footer_text,
      comparativelanguage,
      navbar_out_session_text,
      user_menu_language,
      comparative_user_panel_language,
      card_user_panelLanguage,
    },
  };
}

const Comparaciones = (props) => {
  const router = useRouter();
  const { isVerifySession, userDataFound } = useVerifySession();

  if (!isVerifySession) {
    return null;
  }

  if (!userDataFound) {
    router.push("/");
    return null;
  }

  return (
    <>
      <Head>
        <title>Comparaciones</title>
        <meta name="description" content="comparaciones" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ overflow: "hidden" }}>
        <TextProvider content={props}>
          <Hero />
          <Faq />
          <Footer />
        </TextProvider>
      </main>
    </>
  );
};

export default Comparaciones;
