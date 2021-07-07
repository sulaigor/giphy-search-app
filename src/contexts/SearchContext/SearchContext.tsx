import { createContext, useContext, useReducer } from 'react';
import { IChildrenProps as IProps } from 'types/props';
import searchReducer, { initialState } from './searchReducer';
import { SearchContextType } from './types';

const Context = createContext<SearchContextType>({
  ...initialState,
});

const SearchContext = ({ children }: IProps) => {
  const [reducerState] = useReducer(searchReducer, initialState);

  const contextValue: SearchContextType = {
    ...reducerState,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default SearchContext;
export const useSearchContext = () => useContext(Context);
