import Hero from "components/Pages/home/Hero/Hero";
import LogoSlider from "components/Pages/home/LogoSlider/Logos";
import Description from "components/Pages/home/Description/Description";
import Details from "components/Pages/home/Details/Details";
import Banner from "components/Pages/home/Banner/Banner";
import TextProvider from "contexts/TextContext/TextProvider";
import CallAction from "components/Pages/home/CallAction/CallAction";
// import Blog from "components/Pages/home/Blog/Blog";
import Faq from "components/UI/Faq/Faq";
import Fundation from "components/UI/Fundation/Fundation";
import Testimonial from "components/UI/Testimonial/Testimonial";
// import Repatriation from "components/Pages/home/Repatriation/Repatriation";
import Cookies from "components/UI/Cookies/Cookies";
import StructuredData from "components/Pages/home/StructuredData/StructuredData";
import Metadata from "components/Pages/home/Medatada/Metadata";
import Layout from "components/UI/Layout/Layout";

export async function getStaticProps({ locale }) {
  const home_sections = [
    "metadata",
    "hero",
    "logos_metadata",
    "footer_text",
    "language_selector",
    "information",
    "policies_type",
    "functioning",
    "considerations",
    "banner",
    "blog",
    "help",
    "solidarity_projects",
    "testimonials",
    "faq",
    "solidarity_project_modal",
  ];

  const general_sections = [
    ["stickybuttons", "btn_help_language"],
    ["cookies", "banner_language"],
    ["cookies", "cookies_setting_language"],
    ["cookies", "type_cookies"],
    ["cookies", "cookie_list_language"],
    ["cookies", "text_language"],
    ["navbar", "navbar_out_session_text"],
    ["usermenu", "user_menu_language"],
    ["stickybuttons", "call_card_form_language"],
    ["modalstyle2", "modal_style2_text"],
    ["stickybuttons", "help_card_language"],
  ];

  const promises = home_sections.map(async (section) => {
    try {
      const response = await import(
        `../data/Pages/home/${locale}/${section}.json`
      );
      return response.default[section];
    } catch (err) {
      // console.log(err);
      return null;
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

  const [
    metadata,
    hero,
    logos_metadata,
    footer_text,
    language_selector,
    information,
    policies_type,
    functioning,
    considerations,
    banner,
    blog,
    help,
    solidarity_projects,
    testimonials,
    faq,
    solidarity_project_modal,
    btn_help_language,
    banner_language,
    cookies_setting_language,
    type_cookies,
    cookie_list_language,
    text_language,
    navbar_out_session_text,
    user_menu_language,
    call_card_form_language,
    modal_style2_text,
    help_card_language,
  ] = await Promise.all([...promises, ...promises2]);

  return {
    props: {
      metadata,
      hero,
      logos_metadata,
      footer_text,
      language_selector,
      information,
      policies_type,
      functioning,
      considerations,
      banner,
      blog,
      help,
      solidarity_projects,
      testimonials,
      faq,
      solidarity_project_modal,
      btn_help_language,
      banner_language,
      cookies_setting_language,
      type_cookies,
      cookie_list_language,
      text_language,
      navbar_out_session_text,
      user_menu_language,
      call_card_form_language,
      modal_style2_text,
      help_card_language,
    },
  };
}

const DecesosHome = (props) => {
  return (
    <>
      <TextProvider content={props}>
        <Metadata />
      </TextProvider>

      <StructuredData />

      <TextProvider content={props}>
        <Cookies />

        <Layout content={props}>
          <Hero />
          <LogoSlider />
          <Description />
          {/* <Repatriation /> */}
          <Banner />
          <Details />
          <CallAction />
          <Fundation />
          {/* <Blog /> */}
          <Testimonial />
          <Faq />
        </Layout>
      </TextProvider>
    </>
  );
};

export default DecesosHome;
