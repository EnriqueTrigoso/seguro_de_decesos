import { useLanguage } from "contexts/LanguageContext/useLanguage";
import styles from "./PrivacyPolicy.module.css";
import { Title25, Title20 } from "components/UI/Tags/Titles";

const LinkToSeguroDeDecesos = () => {
  return (
    <>
      {" "}
      <a href="https://www.polizadedecesos.com">www.polizadedecesos.com</a>
    </>
  );
};

const PrivacyPolicy = ({ privacyPolicy }) => {

  const { domain } = useLanguage()

  const renderizarTextoConLinks = (textoInicial, domain) => {
    const partes = textoInicial.split('{domain}');

    // console.log({ partes })
    // console.log(domain)

    return (
      <></>
      // partes.map((parte, index) => {

      //   if (index === partes.length - 1) {
      //     return parte;
      //   } else {
      //     return (
      //       <>
      //         {parte}
      //         <Link to={domain}>{domain}</Link>
      //       </>
      //     );
      //   }
      // });
    )

  };

  return (
    <div className={styles.privacy_policy_content}>
      <Title25 style={{ textDecoration: "underline" }}>
        {privacyPolicy.title}
      </Title25>
      <section>
        <span>
          1.-{" "}
          <Title25
            style={{
              textDecoration: "underline",
              fontSize: "16px",
              display: "inline",
            }}
          >
            {privacyPolicy.userInfo.title}
          </Title25>
        </span>
        <p>
          {privacyPolicy.userInfo.text[0]}
          <br />
          {privacyPolicy.userInfo.text[1]}
          <br />
          {privacyPolicy.userInfo.text[2]}
        </p>
        <p>
          {
            privacyPolicy.userInfo.text[3].replace(/{domain}/g, domain)
          }
        </p>
      </section>

      <section>
        <span>
          2.-{" "}
          <Title25
            style={{
              textDecoration: "underline",
              fontSize: "16px",
              display: "inline",
            }}
          >
            {privacyPolicy.processingData.title}
          </Title25>
        </span>
        <p>
          {privacyPolicy.processingData.text}
        </p>
      </section>
      <section>
        <Title20>{privacyPolicy.purposesData.title}</Title20>
        <ul>
          <li>
            {privacyPolicy.purposesData.text[0]}
          </li>
          <li>
            {privacyPolicy.purposesData.text[1]}
          </li>
          <li>
            {privacyPolicy.purposesData.text[2].replace(/{domain}/g, domain)}
            <br />
            {privacyPolicy.purposesData.text[3]}
          </li>
          <li>
            {privacyPolicy.purposesData.text[4]}
          </li>
          <li>
            {privacyPolicy.purposesData.text[5].replace(/{domain}/g, domain)}
          </li>
          <li>
            {privacyPolicy.purposesData.text[6]}
          </li>
          <li>
            {privacyPolicy.purposesData.text[7]}
          </li>
          <li>
            {privacyPolicy.purposesData.text[8]}
          </li>
          <li>
            {privacyPolicy.purposesData.text[9]}
          </li>
          <li>
            {privacyPolicy.purposesData.text[10]}
          </li>
        </ul>
      </section>
      <section>
        <Title20>{privacyPolicy.processingDataBased.title}</Title20>
        <ul>
          <li>
            {privacyPolicy.processingDataBased.text[0]}
          </li>
          <li>
            {privacyPolicy.processingDataBased.text[1]}
            <p>{privacyPolicy.processingDataBased.underTextOne.title}</p>
            <ul className={styles.ul_under}>
              <li>
                {privacyPolicy.processingDataBased.underTextOne.text[0]}
              </li>
              <li>
                {privacyPolicy.processingDataBased.underTextOne.text[1]}
              </li>
              <li>
                {privacyPolicy.processingDataBased.underTextOne.text[2]}
              </li>
              <li>
                {privacyPolicy.processingDataBased.underTextOne.text[3]}
              </li>
              <li>
                {privacyPolicy.processingDataBased.underTextOne.text[4]}
              </li>
            </ul>
          </li>
          <li>
            {privacyPolicy.processingDataBased.underTextTwo.title}
          </li>
          <ul className={styles.ul_under}>
            <li>
              {privacyPolicy.processingDataBased.underTextTwo.text[0]}
            </li>
            <li>
              {privacyPolicy.processingDataBased.underTextTwo.text[1].replace(/{domain}/g, domain)}
            </li>
          </ul>
        </ul>
      </section>
      <section>
        <Title20>{privacyPolicy.getData.title}</Title20>
        <p>
          {privacyPolicy.getData.subtitle}
        </p>
        <ul>
          <li>
            {privacyPolicy.getData.text[0]}
          </li>
          <li>
            {privacyPolicy.getData.text[1]}
            <ul className={styles.ul_under}>
              <li>
                {privacyPolicy.getData.underTextOne[0]}
              </li>
              <li>
                {privacyPolicy.getData.underTextOne[1]}
              </li>
              <li>
                {privacyPolicy.getData.underTextOne[2].replace(/{domain}/g, domain)}
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <Title20>{privacyPolicy.shareData.title}</Title20>
        <p>
          {privacyPolicy.shareData.subtitle}
        </p>
        <ul>
          <li>
            {privacyPolicy.shareData.underTextOne.title}
            <ul className={styles.ul_under}>
              <li>
                {privacyPolicy.shareData.underTextOne.text[0]}
              </li>
              <li>
                {privacyPolicy.shareData.underTextOne.text[1]}
              </li>
              <li>
                {privacyPolicy.shareData.underTextOne.text[2]}
              </li>
            </ul>
          </li>
        </ul>
        <p>
          {privacyPolicy.shareData.subtitleTwo}
        </p>
        <ul>
          <li>
            {privacyPolicy.shareData.text[0]}
          </li>
          <li>
            {privacyPolicy.shareData.text[1]}
          </li>
          <li>
            {privacyPolicy.shareData.text[2]}
          </li>
          <li>
            {privacyPolicy.shareData.text[3]}
          </li>
          <li>
            {privacyPolicy.shareData.text[4]}
          </li>
          <li>
            {privacyPolicy.shareData.text[5].replace(/{domain}/g, domain)}
          </li>
        </ul>
        <p>
          {privacyPolicy.shareData.text[6]}
        </p>
      </section>
      <section>
        <Title20>{privacyPolicy.yourRights.title}</Title20>
        <i>{privacyPolicy.yourRights.subtitle}</i>
        <p>
          {privacyPolicy.yourRights.underTextOne.title}
        </p>
        <ul>
          <li>
            {privacyPolicy.yourRights.underTextOne.text[0]}
          </li>
          <li>
            {privacyPolicy.yourRights.underTextOne.text[1]}
          </li>
          <li>
            {privacyPolicy.yourRights.underTextOne.text[2]}
          </li>
          <li>
            {privacyPolicy.yourRights.underTextOne.text[3]}
          </li>
          <li>
            {privacyPolicy.yourRights.underTextOne.text[4]}
          </li>
          <li>
            {privacyPolicy.yourRights.underTextOne.text[5]}
          </li>
          <li>
            {privacyPolicy.yourRights.underTextOne.text[6]}
          </li>
        </ul>
        <i>{privacyPolicy.yourRights.underTextTwo.title}</i>
        <p>
          {privacyPolicy.yourRights.underTextTwo.text[0]}
        </p>
        <p>{privacyPolicy.yourRights.underTextTwo.text[1]}</p>
        <p>
          {privacyPolicy.yourRights.underTextTwo.text[2]}
        </p>
      </section>
      <section>
        <Title20>{privacyPolicy.trueAndOwnData.title}</Title20>
        <p>
          {privacyPolicy.trueAndOwnData.text}
        </p>
      </section>
      <section>
        <Title20>{privacyPolicy.confidentiality.title}</Title20>
        <p>
          {privacyPolicy.confidentiality.text[0]}
        </p>
        <p>
          {privacyPolicy.confidentiality.text[1]}
        </p>
        <p>
          {privacyPolicy.confidentiality.text[2]}
        </p>
        <p>
          {privacyPolicy.confidentiality.text[3]}
        </p>
      </section>
      <section>
        <Title20>{privacyPolicy.dataRetention.title}</Title20>
        <p>
          {privacyPolicy.dataRetention.text[0]}
        </p>
        <p>
          {privacyPolicy.dataRetention.text[1]}
        </p>
        <p>
          {privacyPolicy.dataRetention.text[2]}
        </p>
      </section>
      <section>
        <Title20>{privacyPolicy.securityData.title}</Title20>
        <p>
          {privacyPolicy.securityData.text[0]}
        </p>
        <p>
          {privacyPolicy.securityData.text[1]}
        </p>
      </section>
      <section>
        <Title20>{privacyPolicy.ChangesThisPolicy.title}</Title20>
        <p>
          {privacyPolicy.ChangesThisPolicy.text}
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
