import axios from 'axios';
import queryString from 'query-string';
import { MAX_PAGES_COUNT, PAGINATION_ITEMS_COUNT } from 'const/pagination';
import { IGif } from 'types/gifs';
import { getEnviroment } from 'utils/enviroment';

const getGifsOffset = (page: number) => Math.max(page - 1, 0) * PAGINATION_ITEMS_COUNT;
const getMaxPagesCount = (gifsTotalCount: number): number =>
  Math.min(Math.floor(gifsTotalCount / PAGINATION_ITEMS_COUNT), MAX_PAGES_COUNT);

const getSearchQuery = (searchQuery: string, currentPage: number): Record<string, string | number> => {
  const { REACT_APP_API_KEY } = getEnviroment();

  return {
    api_key: REACT_APP_API_KEY,
    q: searchQuery,
    limit: PAGINATION_ITEMS_COUNT,
    offset: getGifsOffset(currentPage),
  };
};

const getSearchUrl = (searchQuery: string, currentPage: number): string => {
  const { REACT_APP_SEARCH_ENDPOINT } = getEnviroment();

  return queryString.stringifyUrl({
    url: REACT_APP_SEARCH_ENDPOINT,
    query: getSearchQuery(searchQuery, currentPage),
  });
};

interface IGetGifsReturn {
  newGifs: IGif[];
  maxPages: number;
}

interface IGifsResponseData {
  data: IGif[];
  pagination: {
    total_count: number;
  };
}

export const getGifs = async (searchQuery: string, currentPage: number): Promise<IGetGifsReturn> => {
  const { data: responseData } = await axios.get<IGifsResponseData>(getSearchUrl(searchQuery, currentPage));
  const {
    data: newGifs,
    pagination: { total_count: totalCount },
  } = responseData;

  return { newGifs, maxPages: getMaxPagesCount(totalCount) };
};
