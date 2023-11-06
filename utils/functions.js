import AssegurancadedecessosLogo from "components/Logos/AssegurancadedecessosLogo";
import HeriotzaAseguruaLogo from "components/Logos/HeriotzaAseguruaLogo";
import SeguroDecesosLogo from "components/Logos/SeguroDecesosLogo";
import SegurodeMorte from "components/Logos/SegurodeMorte";
import AssicurazionemorteLogo from "components/Logos/AssicurazionemorteLogo";
import AsigurarededecesLogo from "components/Logos/AsigurarededecesLogo";
import StrakhovaniyesmertiLogo from "components/Logos/StrakhovaniyesmertiLogo";
import SegurodesepelioLogo from "components/Logos/SegurodesepelioLogo";
import SeguroexequialLogo from "components/Logos/SeguroexequialLogo";
import SeguroHindi from "components/Logos/SeguroHindi";
import PolizaDecesosLogo from "components/Logos/PolizaDecesosLogo";
import LogoArabeSVG from "components/Logos/LogoArabeSVG";
import serverDomains from "./domains.json";
import { GET, POST } from "services/fetching";
import SangzangLogo from "components/Logos/SangzangLogo";
import DecesosSueco from "components/Logos/DecesosSueco";
import DecesosGriego from "components/Logos/DecesosGriego";
import DecesosCoreano from "components/Logos/DecesosCoreano";
import Segurongkamatayan from "components/Logos/Segurongkamatayan";

export function ifEqual(obj1, obj2) {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false;
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let prop in obj1) {
    if (obj1.hasOwnProperty(prop)) {
      if (!obj2.hasOwnProperty(prop)) {
        return false;
      }

      if (obj1[prop] !== obj2[prop]) {
        return false;
      }
    }
  }

  return true;
}

export function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export function getLanguage(language) {
  const default_domains = {
    es: "segurodedecesos.com",
    "es-poliza": "polizadedecesos.com",
    ca: "assegurancadedecessos.com",
    eu: "heriotzaasegurua.com",
    ar: "tamminaljanaza.com",
    ko: "janglyeboheom.com",
    hi: "svaasthybeema.com",
    gl: "segurodemorte.com",
    it: "assicurazionemorte.com",
    ro: "asigurarededeces.com",
    ru: "strakhovaniyesmerti.com",
    // 'uk': 'localhost.com',
    "es-CO": "seguroexequial.com",
    "es-PE": "segurodesepelio.com",
    // 'en': 'localhost.com',
    // 'fr': 'localhost.com',
    // 'en-HI': 'Svaasthybeema.com',
    zh: "sangzangbaoxian.com",
    el: "asfalisithanatou.com",
    sv: "begravningsforsakring.com",
    fil: "segurongkamatayan.com",
  };

  let localDomain = default_domains[language].toLowerCase();
  const { domains } = serverDomains;

  const domainData = domains.find((domain) => domain.name === localDomain);

  let domainIndex;

  if (domainData) {
    domainIndex = domainData.id;
  } else {
    domainIndex = 228;
  }

  return { domainIndex, domain: default_domains[language] };
}

export function getLogo(language) {
  return {
    es: <SeguroDecesosLogo />,
    "es-poliza": <PolizaDecesosLogo />,
    ca: <AssegurancadedecessosLogo />,
    eu: <HeriotzaAseguruaLogo />,
    gl: <SegurodeMorte />,
    it: <AssicurazionemorteLogo />,
    ro: <AsigurarededecesLogo />,
    ru: <StrakhovaniyesmertiLogo />,
    "es-PE": <SegurodesepelioLogo />,
    "es-CO": <SeguroexequialLogo />,
    hi: <SeguroHindi />,
    ko: <DecesosCoreano />,
    // 'en-HI': <SeguroHindi />,
    // 'es-ES-MD': <PolizaDecesosLogo />,
    ar: <LogoArabeSVG />,
    // 'en': <SeguroDecesosLogo />,
    // 'fr': <SeguroDecesosLogo />,
    zh: <SangzangLogo />,
    el: <DecesosGriego />,
    sv: <DecesosSueco />,
    fil: <Segurongkamatayan />,
  }[language];
}

export function processBoldText(text) {
  let elements = [];
  let startComment, endComment;

  while (text.length > 0) {
    startComment = text.indexOf("/*");
    endComment = text.indexOf("*/");

    if (startComment !== -1) {
      let beforeComment = text.slice(0, startComment).trim();
      let insideComment = text.slice(startComment + 2, endComment).trim();

      if (beforeComment) {
        elements.push({ type: "text", content: beforeComment });
      }
      if (insideComment) {
        elements.push({ type: "bold", content: insideComment });
      }

      text = text.slice(endComment + 2);
    } else {
      if (text.trim()) {
        elements.push({ type: "text", content: text.trim() });
      }
      break;
    }
  }

  return elements;
}

export const processBoldTextMod = (text, style) => {
  const elements = [];
  const regex = /\/([^/]+)\//g;
  let match;
  let lastIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    const beforeComment = text.slice(lastIndex, match.index).trim();
    const insideComment = match[1].trim();

    if (beforeComment) {
      elements.push({ type: "text", content: beforeComment });
    }
    if (insideComment) {
      elements.push({ type: "bold", content: insideComment });
    }

    lastIndex = match.index + match[0].length;
  }

  const remainingText = text.slice(lastIndex).trim();
  if (remainingText) {
    elements.push({ type: "text", content: remainingText });
  }

  return elements.map((elem, index) => {
    if (elem.type === "text") {
      return elem.content + " ";
    } else {
      return (
        <span key={index} style={style}>
          {elem.content}{" "}
        </span>
      );
    }
  });
};

// export function toPercentEncoding(text, courierFont = false) {
//   text = text
//     .replace(/ /g, "%20")
//     .replace(/\:/g, "%3A")
//     .replace(/\s/g, "%0A")
//     .replace("\n", "%0A")
//     .replace(/\&/g, "%26")
//     .replace(/\[/g, "%5B")
//     .replace(/\]/g, "%5D")
//     .replace(/\./g, "%2E")
//     .replace(/\@/g, "%40")
//     .replace(/\,/g, "%2C");

//   if (courierFont) {
//     text = "%60%60%60" + text + "%60%60%60";
//   }

//   return text;
// }

// export function SendingWhatsapp(text) {
//   const ToPhone = "34983666666";
//   const Message_format = toPercentEncoding(text);
//   window.open(
//     `https://api.whatsapp.com/send?phone=${ToPhone}&text=${Message_format}`
//   );
// }

export function verifyInputs(fields) {
  let allValid = true;
  let errors = [];

  for (let field of fields) {
    const value = field.value;
    const isValid = value && field.regex.test(value);

    if (!isValid) {
      allValid = false;
      errors.push({
        field_name: field.name,
        bool: true,
      });
    }
  }

  return errors;
}

export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export async function registerAndLoginUser(params, domainIndex) {
  const { name, email, phone, postal_code, birthdates } = params;

  let userLogin = JSON.parse(window.localStorage.getItem("userDataEva"));

  if (userLogin) {
    try {
      if (isEmpty(params) || userLogin.email === email) {
        return true;
      }
    } catch {
      console.log("");
    }
  }

  try {
    const emailJson = await POST("/user/register", {
      email,
      domain: domainIndex,
    });

    const { status } = emailJson;

    //Se ejecuta cuando usuario no puede registrarse debido a que ya existe.
    if (status !== "ok") {
      //Si existe sesion activa
      if (userLogin) {
        window.localStorage.setItem(
          "formData",
          JSON.stringify({
            postal_code,
            birthdates,
          })
        );

        return true;
      } else {
        // console.log('no hay usuario en sesion')
        return false;
      }
    }

    if (userLogin) {
      try {
        GET(userLogin.token, "/user/logout");
      } catch (err) {
        console.log(err);
      }
    }

    window.localStorage.setItem(
      "userDataEva",
      JSON.stringify({ ...emailJson, email: email.toLowerCase() })
    );

    window.localStorage.setItem(
      "formData",
      JSON.stringify({
        postal_code,
        birthdates,
      })
    );

    try {
      const lead = await POST("/deaths_insurance/leads/register_lead", {
        name,
        email,
        phone,
        id_domain: domainIndex,
      });
    } catch (err) {
      // console.log(err)
    }

    return true;
  } catch (err) {
    // console.log(err)
    return false;
  }
}

export async function getHeroAndFooterText(locale) {
  const sections = ["hero", "footer_text", "language_selector"];

  const general_sections = [["navbar", "navbar_out_session_text"]];

  const promises = sections.map(async (section) => {
    try {
      const response = await import(
        `../data/Pages/home/${locale}/${section}.json`
      );
      return response.default[section];
    } catch (err) {
      // console.error(err)
    }
  });

  const promises2 = general_sections.map(async ([section, file]) => {
    try {
      const response = await import(
        `../data/General/${section}/${locale}/${file}.json`
      );
      return response.default;
    } catch (err) {
      console.error(
        `No encontro \n General/${section}/${locale}/${file}.json \n`
      );
    }
  });

  const [hero, footer_text, language_selector, navbar_out_session_text] =
    await Promise.all([...promises, ...promises2]);

  return {
    hero,
    footer_text,
    language_selector,
    navbar_out_session_text,
  };
}
