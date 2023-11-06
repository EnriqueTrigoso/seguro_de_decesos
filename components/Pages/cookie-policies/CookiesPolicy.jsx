import { useLanguage } from "../../../contexts/LanguageContext/useLanguage";
import styles from "./CookiesPolicy.module.css";

const CookiesPolicy = ({ cookiesPolicy }) => {
  const { content, tables } = cookiesPolicy;
  const { whatIsAcookie, typeOfCookies, deleteCookies } = content;
  const {domain} = useLanguage()

  const {
    technicalCookies,
    analyticalCookies,
    thirdCookies,
    advertisingCookies,
  } = tables;

  return (
    <div className={styles.cookies_policy_content}>
      <h1>{content.title}</h1>
      <h2>{whatIsAcookie.title}</h2>
      <p>{whatIsAcookie.content[0]}</p>
      <h2>{typeOfCookies.title}</h2>
      <p>{typeOfCookies.content[0].replace(/{domain}/g, domain)}</p>
      <strong>{typeOfCookies.content[1]}</strong>
      <ul>
        <li>{typeOfCookies.content[2]}</li>
        <li>{typeOfCookies.content[3]}</li>
      </ul>
      <strong>{typeOfCookies.content[4]}</strong>
      <ul>
        <li>{typeOfCookies.content[5]}</li>
        <li>{typeOfCookies.content[6]}</li>
      </ul>
      <p>{typeOfCookies.content[7]}</p>

      <br />
      <h3>{technicalCookies.title}</h3>
      <div style={{ overflowX: "auto" }}>
        <table>
          <tbody>
            {technicalCookies.content.map((technicalCookie, i) => (
              <tr key={i}>
                <td>{technicalCookie.name}</td>
                <td>{technicalCookie.description}</td>
                <td>{technicalCookie.duration}</td>
                <td>{technicalCookie.property}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <h3>{analyticalCookies.title}</h3>
      <div style={{ overflowX: "auto" }}>
        <table>
          <tbody>
            {analyticalCookies.content.map((analyticalCookie, i) => (
              <tr key={i}>
                <td>{analyticalCookie.name}</td>
                <td>{analyticalCookie.description}</td>
                <td>{analyticalCookie.duration}</td>
                <td>{analyticalCookie.property}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <h3>{thirdCookies.title}</h3>
      <div style={{ overflowX: "auto" }}>
        <table>
          <tbody>
            {thirdCookies.content.map((thirdCookie, i) => (
              <tr key={i}>
                <td>{thirdCookie.name}</td>
                <td>{thirdCookie.description}</td>
                <td>{thirdCookie.duration}</td>
                <td>{thirdCookie.property}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <h3>{advertisingCookies.title}</h3>
      <div style={{ overflowX: "auto" }}>
        <table>
          <tbody>
            {advertisingCookies.content.map((advertisingCookie, i) => (
              <tr key={i}>
                <td>{advertisingCookie.domain}</td>
                <td>{advertisingCookie.name}</td>
                <td>{advertisingCookie.description}</td>
                <td>{advertisingCookie.duration}</td>
                <td>{advertisingCookie.property}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <h2>{deleteCookies.title}</h2>
      <p>{deleteCookies.content[0]}</p>
    </div>
  );
};

export default CookiesPolicy;
