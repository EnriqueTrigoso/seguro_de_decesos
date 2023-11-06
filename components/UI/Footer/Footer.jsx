import Card from "./Card";
import styles from "./Footer.module.css";
import Link from "next/link";
import { useLanguage } from "contexts/LanguageContext/useLanguage";
import useText from "contexts/TextContext/useText";
import EvaSegurosLogoWhite from "components/Logos/EvaSegurosLogoWhite";
import {
  FacebookIco,
  InstagramIco,
  Linkedin,
  TwitterIco,
} from "components/Icons";
import YoutubeIco from "components/Icons/YoutubeIco";

const Footer = () => {
  const { domain } = useLanguage();
  const { footer_text } = useText();

  const policies_urls = [
    "/legal-warning",
    "/privacy-policies",
    "/cookie-policies",
  ];

  return (
    <section className={styles.footer}>
      <div className={`${styles.footer_site} container`}>
        <div className={styles.brand}>
          <div className={styles.logo_container}>
            <Link href={"/"} aria-label="Logo EvaSeguros">
              <EvaSegurosLogoWhite />
            </Link>
          </div>

          <div className={styles.social}>
            <p className={styles.subtitle}>{footer_text.social_title}</p>

            <p className={styles.subtitle}>{footer_text.social_description}</p>

            <div className={styles.social_media}>
              <a
                href="https://www.facebook.com/SegurosEva"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook de Eva Seguros"
              >
                <FacebookIco />
              </a>

              <a
                href="https://www.instagram.com/seguroseva/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de Eva Seguros"
              >
                <InstagramIco />
              </a>

              <a
                href="https://twitter.com/Seguros_Eva"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter de Eva Seguros"
              >
                <TwitterIco />
              </a>

              <a
                href="https://www.linkedin.com/company/eva-movil/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin de Eva Seguros"
              >
                <Linkedin />
              </a>

              <a
                href="https://www.youtube.com/watch?v=-jpzbSaTKDs"
                target="_blank"
                rel="noreferrer"
                aria-label="Youtube de Eva Seguros"
              >
                <YoutubeIco />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.cards_container}>
          <Card title={footer_text.section1.title}>
            {footer_text.section1.options.map((elem, index) => {
              return (
                <Link
                  key={index}
                  href={elem.href}
                  className={styles.footer_link}
                >
                  {elem.title}
                </Link>
              );
            })}
          </Card>

          <Card title={footer_text.section2.title}>
            {footer_text.section2.options.map((elem, index) => {
              return (
                <Link
                  key={index}
                  href={elem.href}
                  className={styles.footer_link}
                >
                  {elem.title}
                </Link>
              );
            })}
          </Card>

          <Card title={footer_text.section3.title}>
            {footer_text.section3.options.map((elem, index) => {
              return (
                <Link
                  key={index}
                  href={elem.href}
                  className={styles.footer_link}
                >
                  {elem.title}
                </Link>
              );
            })}
          </Card>

          <Card title={footer_text.section4.title}>
            {footer_text.section4.options.map((elem, index) => {
              return (
                <Link
                  key={index}
                  href={policies_urls[index]}
                  className={styles.footer_link}
                  target="_blank"
                >
                  {elem.title}
                  {/* <h2></h2> */}
                </Link>
              );
            })}
          </Card>
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <Link className={styles.copyright} href={"/"}>
          ©{footer_text.copyright.replace("{domain}", domain)}
        </Link>
      </div>
    </section>
  );
};

export default Footer;
