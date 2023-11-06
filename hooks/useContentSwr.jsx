import { useLanguage } from "contexts/LanguageContext/useLanguage";
import useSWR from "swr";

async function fetcher(args) {

  const { url, options } = args;
  const defaultHeader = {
    accept: "application/json",
  };

  options.method = options.method || "GET";
  options.headers = options.headers
    ? { ...defaultHeader, ...options.headers }
    : defaultHeader;

  if (typeof options.body === "object" && options.body !== null) {
    options.body = JSON.stringify(options.body) || false;
  }

  if (!options.body) delete options.body;

  return fetch(url, options).then((res) => res.json());
}

export function useContentSwr({ options }) {

  const { url: urlLanguage } = useLanguage();
  let url = `${process.env.NEXT_PUBLIC_API_URL}/languages${urlLanguage}`;


  const swrData = { url, options };

  let { data, error, isLoading, isValidating } = useSWR(swrData, fetcher);

  try {

    if (data.status === 'Error') {
      // console.log('error con mongo db')
      data = null
    }

  } catch {
    // console.log('no hay la propiedad status')
  }


  return { data, error, isLoading, isValidating };

}
