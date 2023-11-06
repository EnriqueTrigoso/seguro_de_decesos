import { NEXT_PUBLIC_STRAPI_API_TOKEN, NEXT_PUBLIC_STRAPI_API_URL } from '@/../config'

export const fetchArticles = async (params) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${NEXT_PUBLIC_STRAPI_API_TOKEN}`
    }
  };
  const request = await fetch(`${NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*&${params}`, reqOptions);
  const response = await request.json();
  return response;
};