const cookiesValues = {
  marketing:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFya2V0aW5nIiwiaWQiOjF9.k8us-gNt2tcmg33voZyOwlDl4JI2rT4kw3HQK3VuHWU",
  personalization:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGVyc29uYWxpemF0aW9uIiwiaWQiOjJ9.U3iYAMETPV9zm0PE-mbs8uxESkGpbc3fuE7d7L5OdXQ",
  analytics:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW5hbHl0aWNzIiwiaWQiOjN9.YI1slNcyHZx8b0l67eLXxQAeZTcC9xxMq2UxE9lT4hM",
  essential:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRXNzZW50aWFsIiwiaWQiOjR9.PTLkiru7lJo8Sgu-TsedQKDUoc2ZNG1zd23ikEyFKLU",
};

const areCookies = () => {
  const decodedCookies = decodeURIComponent(document.cookie);
  const cookies =
    decodedCookies.split(";")
    .map(cookie => cookie.split("=")[0].trim());

  return cookies.includes("essential");
}
// const areCookies = () => (document.cookie.length ? true : false);

const setCookiesInBrowser = (cookiesAccepted) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 2);
  const dateToExpire = date.toUTCString();

  for (const key in cookiesAccepted) {
    if (!cookiesAccepted[key]) continue;
    let cookieData = `${key}=${cookiesValues[key]}; expires=${dateToExpire}`;
    document.cookie = cookieData;
  }
}

export { areCookies, setCookiesInBrowser };
