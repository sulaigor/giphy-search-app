import axios from 'axios';
import queryString from 'query-string';
import { IGif } from 'types/gifs';
import { getEnviroment } from 'utils/enviroment';

const getSearchQuery = (searchQuery: string) => {
  const { REACT_APP_API_KEY } = getEnviroment();

  return {
    api_key: REACT_APP_API_KEY,
    q: searchQuery,
  };
};

const getSearchUrl = (searchQuery: string): string => {
  const { REACT_APP_SEARCH_ENDPOINT } = getEnviroment();

  return queryString.stringifyUrl({
    url: REACT_APP_SEARCH_ENDPOINT,
    query: getSearchQuery(searchQuery),
  });
};

export const getGifs = async (searchQuery: string): Promise<IGif[]> => {
  const {
    data: { data: newGifs },
  } = await axios.get<{ data: IGif[] }>(getSearchUrl(searchQuery));

  return newGifs;
};
