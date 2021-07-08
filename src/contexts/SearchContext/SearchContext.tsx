import { createContext, useContext, useReducer } from 'react';
import { IGif } from 'types/gifs';
import { IChildrenProps as IProps } from 'types/props';
import { DEFAULT_DEBOUNCE_DURATION } from 'const/debounce';
import { useDebounce } from 'hooks/useDebounce';
import { dummyFunction } from 'utils/dummy';
import searchReducer, { initialState } from './searchReducer';
import {
  setGifsAction,
  setMaxPagesAction,
  setPageAction,
  setSearchQueryAction,
} from './searchReducer/actions';
import { SearchContextType } from './types';
import { getGifs } from './utils';

const Context = createContext<SearchContextType>({
  ...initialState,
  gifs: null,
  setSearchQuery: dummyFunction,
  setPage: dummyFunction,
});

const SearchContext = ({ children }: IProps) => {
  const [reducerState, dispatch] = useReducer(searchReducer, initialState);
  const { gifs, searchQuery, page } = reducerState;

  useDebounce(
    async () => {
      if (!searchQuery) return;

      try {
        const { newGifs, maxPages } = await getGifs(searchQuery, page);

        if (newGifs.length > 0) {
          setGifs(newGifs);
          setMaxPages(maxPages);
        }
      } catch (err) {
        console.error('Get new gifs error:', err);
      }
    },
    [searchQuery, page],
    DEFAULT_DEBOUNCE_DURATION
  );

  const setGifs = (newGifs: IGif[]) => dispatch(setGifsAction(newGifs));
  const setPage = (newPage: number) => dispatch(setPageAction(newPage));
  const setMaxPages = (newMaxPages: number) => dispatch(setMaxPagesAction(newMaxPages));
  const setSearchQuery = (newSearchQuery: string) => dispatch(setSearchQueryAction(newSearchQuery));

  const contextValue: SearchContextType = {
    ...reducerState,
    gifs: gifs?.[page] ?? null,
    setSearchQuery,
    setPage,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default SearchContext;
export const useSearchContext = () => useContext(Context);
