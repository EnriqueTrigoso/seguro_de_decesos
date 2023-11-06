import Footer from "components/UI/Footer/Footer";
import Hero from "components/Pages/user-panel/Hero/Hero";
import LastComparative from "components/Pages/user-panel/LastComparative/LastComparative";
import Head from "next/head";
import useVerifySession from "hooks/useVerifySession";
import Faq from "components/UI/Faq/Faq";
import { useRouter } from "next/router";
import TextProvider from "contexts/TextContext/TextProvider";
import { IsLoginProvider } from "contexts/IsLoginContext/IsLoginProvider";

export async function getStaticProps({ locale }) {

  const sections = [
    "language_selector",
    "faq",
    "footer_text"
  ];

  const user_panel_sections = [
    "card_user_panelLanguage",
    "comparative_user_panel_language",
    "panel_section_language",
    "user_panel_language"
  ]

  const general_sections = [
    ["navbar", "navbar_out_session_text"],
    ["usermenu", "user_menu_language"],
    // ["stickybuttons", "btn_help_language"],
    // ["cookies", "banner_language"],
    // ["stickybuttons", "call_card_form_language"],
    // ["modalstyle2", "modal_style2_text"],
    // ["stickybuttons", "help_card_language"],
  ]

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

  const promises2 = user_panel_sections.map(async (section) => {
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

  const [
    language_selector,
    faq,
    footer_text,
    card_user_panelLanguage,
    comparative_user_panel_language,
    panel_section_language,
    user_panel_language,
    navbar_out_session_text,
    user_menu_language,
  ] = await Promise.all([...promises, ...promises2, ...promises3]);

  return {
    props: {
      language_selector,
      faq,
      footer_text,
      card_user_panelLanguage,
      comparative_user_panel_language,
      panel_section_language,
      user_panel_language,
      navbar_out_session_text,
      user_menu_language
    },
  };
}

const UserPanel = (props) => {

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
        <title>User Panel</title>
        <meta name="description" content="User Panel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ overflow: "hidden" }}>

        <TextProvider content={props}>
          <IsLoginProvider>
            <Hero />
          </IsLoginProvider>
          <LastComparative />
          <Faq />
          <Footer />
        </TextProvider>
      </main>
    </>
  );
};

export default UserPanel;
