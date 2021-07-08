import axios from 'axios';
import queryString from 'query-string';
import { PAGINATION_ITEMS_COUNT } from 'const/pagination';
import { IGif } from 'types/gifs';
import { getEnviroment } from 'utils/enviroment';

const getGifsOffset = (page: number) => Math.min(page - 1, 0) * PAGINATION_ITEMS_COUNT;

const getSearchQuery = (searchQuery: string, page: number): Record<string, string | number> => {
  const { REACT_APP_API_KEY } = getEnviroment();

  return {
    api_key: REACT_APP_API_KEY,
    q: searchQuery,
    limit: PAGINATION_ITEMS_COUNT,
    offset: getGifsOffset(page),
  };
};

const getSearchUrl = (searchQuery: string, page: number): string => {
  const { REACT_APP_SEARCH_ENDPOINT } = getEnviroment();

  return queryString.stringifyUrl({
    url: REACT_APP_SEARCH_ENDPOINT,
    query: getSearchQuery(searchQuery, page),
  });
};

interface IGetGifsReturn {
  newGifs: IGif[];
  maxPages: number;
}

export const getGifs = async (searchQuery: string, page: number): Promise<IGetGifsReturn> => {
  const {
    data: { data: newGifs },
  } = await axios.get<{ data: IGif[] }>(getSearchUrl(searchQuery, page));

  const maxPages = 10;

  return { newGifs, maxPages };
};
