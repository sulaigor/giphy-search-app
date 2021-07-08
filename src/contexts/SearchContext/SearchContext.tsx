import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import { GifType } from 'types/gifs';
import { IChildrenProps as IProps } from 'types/props';
import { DEFAULT_DEBOUNCE_DURATION } from 'const/debounce';
import { useDebounce } from 'hooks/useDebounce';
import { dummyFunction } from 'utils/dummy';
import searchReducer, { initialState } from './searchReducer';
import { setGifsAction, setSearchQueryAction } from './searchReducer/actions';
import { SearchContextType } from './types';
import { getSearchUrl } from './utils';

const Context = createContext<SearchContextType>({
  ...initialState,
  setSearchQuery: dummyFunction,
});

const SearchContext = ({ children }: IProps) => {
  const [reducerState, dispatch] = useReducer(searchReducer, initialState);
  const { searchQuery } = reducerState;

  useDebounce(
    async () => {
      if (!searchQuery) return;

      try {
        const {
          data: { data: newGifs },
        } = await axios.get<{ data: GifType[] }>(getSearchUrl(searchQuery));

        if (newGifs.length > 0) setGifs(newGifs);
      } catch (err) {
        console.error('Get new gifs error:', err);
      }
    },
    [searchQuery],
    DEFAULT_DEBOUNCE_DURATION
  );

  const setGifs = (newGifs: GifType[]) => dispatch(setGifsAction(newGifs));
  const setSearchQuery = (newSearchQuery: string) => dispatch(setSearchQueryAction(newSearchQuery));

  const contextValue: SearchContextType = {
    ...reducerState,
    setSearchQuery,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default SearchContext;
export const useSearchContext = () => useContext(Context);
