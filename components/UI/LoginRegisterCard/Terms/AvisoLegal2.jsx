import { Title18, Title25 } from "components/UI/Tags/Titles";
import styles from "./AvisoLegal.module.css";

const AvisoLegal2 = ({ legalWarning }) => {
  
  const userAgrees =
  	legalWarning.obligationsResponsibilitiesUser.content.slice(1, 4);

  const userShallRefrain =
    legalWarning.obligationsResponsibilitiesUser.content.slice(5, 13);

  const underList =
  	legalWarning.obligationsResponsibilitiesUser.content.slice(14, 23);

  const responsibilitiesOne =
  	legalWarning.responsibilities.content.slice(0, 3);

  const responsibilitiesList =
  	legalWarning.responsibilities.content.slice(3, 7);

  return (
    <>
      <Title25 style={{ textDecoration: "underline" }}>
        {legalWarning.title}
      </Title25>
      <div className={styles.content}>
        <Title18>{legalWarning.lssi.title}</Title18>
        {legalWarning.lssi.content.map((txt, i) => (
          <p key={i}>{txt}</p>
        ))}
        <p>
          <Title18>1. {legalWarning.identifyingData.title}</Title18>
          <ul>
            {legalWarning.identifyingData.content.map((txt, i) => (
              <li key={i}>{txt}</li>
            ))}
          </ul>
        </p>

        <p>
          <Title18>2. {legalWarning.object.title}</Title18>
          <br />
          {legalWarning.object.content[0]}
        </p>

        <p>
          <Title18>3. {legalWarning.privacyData.title}</Title18>
          <br />
          {legalWarning.privacyData.content[0]}
        </p>

        <p>
          <Title18>
            4. {legalWarning.industrialIntellectualProperty.title}
          </Title18>
          {legalWarning.industrialIntellectualProperty.content.map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </p>

        <Title18>
          5. {legalWarning.obligationsResponsibilitiesUser.title}
        </Title18>
        <p>
          {legalWarning.obligationsResponsibilitiesUser.content[0]}
          <ul>
            {userAgrees.map((txt, i) => (
              <li key={i}>
                {i + 1}. {txt}
              </li>
            ))}
          </ul>
        </p>
        <p>
          {legalWarning.obligationsResponsibilitiesUser.content[4]}
          <ul>
            {userShallRefrain.map((txt, i) => (
              <li key={i}>
                {i + 1}. {txt}
              </li>
            ))}
            <li>
              9. {legalWarning.obligationsResponsibilitiesUser.content[13]}
              <ul className={styles.sub_list}>
                {underList.map((txt, i) => (
                  <li key={i}>• {txt}</li>
                ))}
              </ul>
              {legalWarning.obligationsResponsibilitiesUser.content[23]}
            </li>
          </ul>
        </p>

        <Title18>6. {legalWarning.responsibilities.title}</Title18>
        {responsibilitiesOne.map((txt, i) => (
          <p key={i}>{txt}</p>
        ))}
        <p>
          <ul>
            {responsibilitiesList.map((txt, i) => (
              <li key={i}>
                {i + 1}. {txt}
              </li>
            ))}
          </ul>
        </p>
        <p>{legalWarning.responsibilities.content[7]}</p>
        <p>{legalWarning.responsibilities.content[8]}</p>

        <Title18>7. {legalWarning.hyperlink.title}</Title18>
        {legalWarning.hyperlink.content.map((txt, i) => (
          <p key={i}>{txt}</p>
        ))}

        <Title18>8. {legalWarning.dataProtection.title}</Title18>
        <p>{legalWarning.dataProtection.content[0]}</p>

        <Title18>9. {legalWarning.cookies.title}</Title18>
        {legalWarning.cookies.content.map((txt, i) => (
          <p key={i}>{txt}</p>
        ))}
        <Title18>10. {legalWarning.representationsWarranties.title}</Title18>
        <p>{legalWarning.representationsWarranties.content[0]}</p>

        <Title18>11. {legalWarning.majorForce.title}</Title18>
        <p>{legalWarning.majorForce.content[0]}</p>

        <Title18>12. {legalWarning.disputeResolution.title}</Title18>
        {legalWarning.disputeResolution.content.map((txt, i) => (
          <p key={i}>{txt}</p>
        ))}
      </div>
    </>
  );
};

export default AvisoLegal2;
