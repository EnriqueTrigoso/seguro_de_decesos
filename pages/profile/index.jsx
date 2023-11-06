import Footer from "components/UI/Footer/Footer";
import Hero from "components/Pages/profile/Hero/Hero";
import useVerifySession from "hooks/useVerifySession";
import Head from "next/head";
import { useRouter } from "next/router";
import Faq from "components/UI/Faq/Faq";
import TextProvider from "contexts/TextContext/TextProvider";
import { IsLoginProvider } from "contexts/IsLoginContext/IsLoginProvider";

export async function getStaticProps({ locale }) {
  const sections = ["language_selector", "faq", "footer_text"];

  const mis_datos_section = [
    "avatartext",
    "dataformlanguage",
    "genderlanguage",
  ];

  const general_sections = [
    ["navbar", "navbar_out_session_text"],
    ["usermenu", "user_menu_language"],
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

  const [
    language_selector,
    faq,
    footer_text,
    avatartext,
    dataformlanguage,
    genderlanguage,
    navbar_out_session_text,
    user_menu_language,
  ] = await Promise.all([...promises, ...promises2, ...promises3]);

  return {
    props: {
      language_selector,
      faq,
      footer_text,
      avatartext,
      dataformlanguage,
      genderlanguage,
      navbar_out_session_text,
      user_menu_language,
    },
  };
}

const MisDatos = (props) => {
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
        <title>Mis Datos</title>
        <meta name="description" content="Mis Datos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ overflow: "hidden" }}>

        <TextProvider content={props}>
          <IsLoginProvider>
            <Hero />
          </IsLoginProvider>
          {/* <Faq content={props.faq} /> */}
          <Footer />
        </TextProvider>

      </main>
    </>
  );
};

export default MisDatos;
