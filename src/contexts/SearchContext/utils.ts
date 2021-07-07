import queryString from 'query-string';
import { getEnviroment } from 'utils/enviroment';

const getSearchQuery = (searchQuery: string) => {
  const { REACT_APP_API_KEY } = getEnviroment();

  return {
    api_key: REACT_APP_API_KEY,
    q: searchQuery,
  };
};

export const getSearchUrl = (searchQuery: string): string => {
  const { REACT_APP_SEARCH_ENDPOINT } = getEnviroment();

  return queryString.stringifyUrl({
    url: REACT_APP_SEARCH_ENDPOINT,
    query: getSearchQuery(searchQuery),
  });
};
