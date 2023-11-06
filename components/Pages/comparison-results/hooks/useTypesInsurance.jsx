import {
  asociacion_europea,
  aura_seguros,
  preventiva,
  santalucia,
  active_seguros,
  // divina_seguros,
  fiatc,
  helvetia,
} from "assets/logos";

import { useEffect, useState } from "react";
import { useModal } from "hooks/useModal";
import { POST } from "services/fetching";
import { useLanguage } from "contexts/LanguageContext/useLanguage";
import { useRouter } from "next/router";
import useText from "contexts/TextContext/useText";

export const useTypeInsurance = () => {
  const router = useRouter();
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [isOpenCallCard, openCallCard, closeCallCard] = useModal(false);
  const [typesInsurance, setTypesInsurance] = useState([]);
  const [startFetching, setStartFetching] = useState(false);

  const { language } = useLanguage();
  const { insurance_characteristics, insurances_types } = useText();

  const saveComparativesId = async (token, comparativesId) => {
    try {
      const res = await POST(
        "/deaths/comparatives/add_comparative_comparator",
        comparativesId,
        token
      );
    } catch {}
  };

  useEffect(() => {
    const fetching_results = async () => {
      let formData =
        JSON.parse(window.localStorage.getItem("formData")) || false;
      let userData = JSON.parse(window.localStorage.getItem("userDataEva"));

      if (!formData) {
        router.push("/comparator");
        return;
      }

      let promises = [
        POST(
          "/deaths/europea/generate_policies_comparator",
          {
            birthdate: formData.birthdates,
          },
          userData.token
        ),
        POST(
          "/deaths/aura/generate_policies_comparador",
          {
            postal_code: formData.postal_code,
            birthdates: formData.birthdates,
          },
          userData.token
        ),
        POST(
          "/deaths/helvetia/generate_general_policies_comparator",
          {
            postal_code: formData.postal_code,
            birthdates: formData.birthdates,
          },
          userData.token
        ),
        POST(
          "/deaths/santalucia/generate_general_policies_comparator",
          {
            postal_code: formData.postal_code,
            birthdates: formData.birthdates,
          },
          userData.token
        ),
        POST(
          "/deaths/fiatc/generate_general_policies_comparator",
          {
            birthdates: formData.birthdates,
            postal_code: formData.postal_code,
          },
          userData.token
        ),
        POST(
          "/deaths/active/generate_policies_comparator",
          {
            birthdates: formData.birthdates,
          },
          userData.token
        ),
        POST(
          "/deaths/preventiva/generate_general_policies_comparator",
          {
            birthdates: formData.birthdates,
            postal_code: formData.postal_code,
          },
          userData.token
        ),
      ];

      try {
        // await new Promise(resolve => setTimeout(resolve, 250000));

        let [
          europea_response,
          aura_response,
          helvetia_response,
          santalucia_response,
          fiatc_response,
          active_response,
          preventiva_response,
        ] = await Promise.allSettled(promises);

        const responses = [];
        const comparativesId = {};

        // console.log({ europea_response })
        // console.log({ aura_response })
        // console.log({ helvetia_response })
        // console.log({ santalucia_response })
        // console.log({ fiatc_response })
        // console.log({ active_response })
        // console.log({ preventiva_response })

        if (europea_response.status === "fulfilled") {
          try {
            comparativesId["id_europea"] = !Object.hasOwn(
              europea_response.value,
              "status"
            )
              ? aura_response.value.aura_deaths.id_result
              : null;

            responses.push({
              name: "europea",
              image: asociacion_europea,
              type: insurances_types["mensual"][language],
              price: europea_response.value.europea_deaths.price,
              description: insurance_characteristics["europea"],
            });
          } catch (err) {
            // console.log('europea Error')
            // console.log(err)
          }
        }

        if (aura_response.status === "fulfilled") {
          try {
            comparativesId["id_aura"] = !Object.hasOwn(
              aura_response.value,
              "status"
            )
              ? aura_response.value.aura_deaths.id_result
              : null;

            responses.push({
              name: "aura",
              image: aura_seguros,
              type: insurances_types["mensual"][language],
              price: aura_response.value.aura_deaths.price.receipt_premium,
              description: insurance_characteristics["aura"],
            });
          } catch (err) {
            // console.log('aura Error')
            // console.log(err)
          }
        }

        if (helvetia_response.status === "fulfilled") {
          try {
            comparativesId["id_helvetia"] = null;

            responses.push({
              name: "helvetia",
              image: helvetia,
              type: insurances_types["mensual"][language],
              price: helvetia_response.value.results.price,
              description: insurance_characteristics["helvetia"],
            });
          } catch (err) {
            // console.log('helvetia Error')
            // console.log(err)
          }
        }

        if (santalucia_response.status === "fulfilled") {
          try {
            comparativesId["id_santalucia"] = null;

            responses.push({
              name: "santalucia",
              image: santalucia,
              type: insurances_types["mensual"][language],
              price: santalucia_response.value.results.price,
              description: insurance_characteristics["santa_lucia"],
            });
          } catch (err) {
            // console.log('santalucia Error')
            // console.log(err)
          }
        }

        if (fiatc_response.status === "fulfilled") {
          try {
            comparativesId["id_fiatc"] = !Object.hasOwn(
              fiatc_response.value,
              "status"
            )
              ? fiatc_response.value.fiatc_deaths.id_result
              : null;

            responses.push({
              name: "fiatc",
              image: fiatc,
              type: insurances_types["mensual"][language],
              price: fiatc_response.value.fiatc_deaths.price,
              description: insurance_characteristics["fiatc"],
            });
          } catch (err) {
            // console.log('fiatc Error')
            // console.log(err)
          }
        }

        if (active_response.status === "fulfilled") {
          try {
            comparativesId["id_active"] = !Object.hasOwn(
              active_response.value,
              "status"
            )
              ? active_response.value.deaths.id_result
              : null;

            responses.push({
              name: "active",
              image: active_seguros,
              type: insurances_types["mensual"][language],
              price: active_response.value.deaths.price_monthly,
              description: insurance_characteristics["active"],
            });
          } catch (err) {
            // console.log('active Error')
            // console.log(err)
          }
        }

        if (preventiva_response.status === "fulfilled") {
          try {
            comparativesId["id_perventiva"] = null;

            responses.push({
              name: "preventiva",
              image: preventiva,
              type: insurances_types["mensual"][language],
              price: preventiva_response.value.results.price,
              description: insurance_characteristics["preventiva"],
            });
          } catch (err) {
            // console.log('perventiva Error')
            // console.log(err)
          }
        }

        // console.log({responses})

        let filteredArray = responses.filter(function (item) {
          return item.price && item.price.trim() !== "";
        });

        saveComparativesId(userData.token, comparativesId);
        setTypesInsurance(filteredArray);
      } catch (err) {
        // console.log(err);
      }

      setIsLoadingContent(false);
    };

    if (startFetching) {
      fetching_results();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startFetching]);

  const closeModalFromCallCard = (close) => closeCallCard();

  return {
    isLoadingContent,
    typesInsurance,
    isOpenCallCard,
    openCallCard,
    closeModalFromCallCard,
    setStartFetching,
  };
};
