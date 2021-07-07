import { createContext, useContext, useReducer } from 'react';
import { IChildrenProps as IProps } from 'types/props';
import { dummyFunction } from 'utils/dummy';
import searchReducer, { initialState } from './searchReducer';
import { setSearchQueryAction } from './searchReducer/actions';
import { SearchContextType } from './types';

const Context = createContext<SearchContextType>({
  ...initialState,
  setSearchQuery: dummyFunction,
});

const SearchContext = ({ children }: IProps) => {
  const [reducerState, dispatch] = useReducer(searchReducer, initialState);

  const setSearchQuery = (newSearchQuery: string) => dispatch(setSearchQueryAction(newSearchQuery));

  const contextValue: SearchContextType = {
    ...reducerState,
    setSearchQuery,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default SearchContext;
export const useSearchContext = () => useContext(Context);
