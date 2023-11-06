import Head from "next/head";
import PoolPhone from "components/Pages/home/PoolPhone/PoolPhone";
import Hero from "components/Pages/comparison-results/Hero/Hero";
import useVerifySession from "hooks/useVerifySession";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IsLoginProvider } from "contexts/IsLoginContext/IsLoginProvider";
import { LoginRegisterModalProvider } from "components/Pages/comparator/context/LoginRegisterModalContext/LoginRegisterModalProvider";
import useVerifyParams from "hooks/useVerifyParams";
import { isEmpty } from "utils/functions";
import TextProvider from "contexts/TextContext/TextProvider";

export async function getStaticProps({ locale }) {
  const decesos_results_sections = [
    "CardContentText",
    "CardHeaderText",
    "display_text",
    "Loader2Text",
    "LoaderResult",
    "insurance_characteristics",
  ];

  const general_sections = [
    ["stickybuttons", "btn_help_language"],
    ["usermenu", "user_menu_language"],
    ["stickybuttons", "call_card_form_language"],
    ["stickybuttons", "help_card_language"],
  ];

  const promises = decesos_results_sections.map(async (section) => {
    try {
      const response = await import(
        `../../data/Pages/comparison-results/${locale}/${section}.json`
      );
      return response.default;
    } catch (err) {
      // console.log(err)
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

  const promises3 = (async () => {
    try {
      const response = await import(
        `../../data/Pages/comparison-results/insurance_types/insurance_type.json`
      );
      return response.default;
    } catch (err) {
      // console.log(err);
      return null;
    }
  })();

  const [
    CardContentText,
    CardHeaderText,
    display_text,
    Loader2Text,
    LoaderResult,
    insurance_characteristics,
    btn_help_language,
    user_menu_language,
    call_card_form_language,
    help_card_language,
    insurances_types,
  ] = await Promise.all([...promises, ...promises2, promises3]);

  return {
    props: {
      CardContentText,
      CardHeaderText,
      display_text,
      Loader2Text,
      LoaderResult,
      insurance_characteristics,
      btn_help_language,
      user_menu_language,
      call_card_form_language,
      help_card_language,
      insurances_types,
    },
  };
}

const DecesosResults = (props) => {
  const router = useRouter();

  const { isVerifySession, userDataFound } = useVerifySession();
  const { isVerifyParams, params } = useVerifyParams();
  const [finishValidation, setFinishValidation] = useState(false);

  useEffect(() => {
    if (isVerifySession && isVerifyParams) {
      if (!userDataFound && isEmpty(params)) {
        router.push("/");
      } else {
        setFinishValidation(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVerifySession, isVerifyParams]);

  if (!finishValidation) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Resultado de Comparativa</title>
        <meta name="description" content="Resultado de Comparativa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ overflow: "hidden" }}>
        <PoolPhone />
        <IsLoginProvider>
          <LoginRegisterModalProvider>
            <TextProvider content={props}>
              <Hero params={params} />
            </TextProvider>
          </LoginRegisterModalProvider>
        </IsLoginProvider>
      </main>
    </>
  );
};

export default DecesosResults;
