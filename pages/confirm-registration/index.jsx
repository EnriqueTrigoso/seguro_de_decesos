import { useRouter } from "next/router";
import styles from "./ConfirmRegistration.module.css";
import { POST } from "services/fetching";
import Notification from "components/UI/Notification/Notification";
import user_verify_ico from "assets/imgs/user_verify_ico.webp";
import { useLanguage } from "contexts/LanguageContext/useLanguage";
import { useEffect } from "react";

export async function getStaticProps({ locale }) {
  const sections = ["confirm_registration"];

  const general_sections = [
    // ["stickybuttons", "btn_help_language"],
    // ["cookies", "banner_language"],
    // ["navbar", "navbar_out_session_text"],
    // ["usermenu", "user_menu_language"],
    // ["stickybuttons", "call_card_form_language"],
    // ["modalstyle2", "modal_style2_text"],
    // ["stickybuttons", "help_card_language"],
    ["notification", "footer_text"],
  ];

  const promises = sections.map(async (section) => {
    try {
      const response = await import(
        `../../data/Pages/confirm-registration/${locale}/${section}.json`
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

  const [confirm_registration, footer_text] = await Promise.all([
    ...promises,
    ...promises2,
  ]);

  return {
    props: {
      confirm_registration,
      footer_text,
    },
  };
}

const ConfirmRegistration = (props) => {
  const router = useRouter();

  const { confirm_registration } = props;

  const circles = ["#5856D6", "#FF2D55", "#FFCC00", "#5AC8FA"];
  const { domain, domainIndex } = useLanguage();

  useEffect(() => {
    try {
      if (Object.keys(router.query).length !== 0) {
        POST("/user/confirm_email_registration", {
          token: router.query.token,
          domain: domainIndex,
        }).then((dataResponse) => {
          if (dataResponse.status === "ok") {
            // console.log('Confirmacion exitosa')
          }
        });
      }
    } catch (error) {
      // console.log({ error })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  return (
    <Notification
      img={user_verify_ico}
      title={confirm_registration.title.replace("{domain}", domain)}
      subtitle={confirm_registration.subtitle}
      button_text={confirm_registration.button_text}
      button_onClick={() => {
        router.push("/login");
      }}
      footer_text={props.footer_text}
    >
      <p className={styles.title2}>{confirm_registration.title2}</p>

      <p className={styles.subtitle}>
        {confirm_registration.description.replace("{domain}", domain)}
      </p>
    </Notification>
  );
};

export default ConfirmRegistration;
