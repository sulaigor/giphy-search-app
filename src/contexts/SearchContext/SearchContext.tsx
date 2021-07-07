import { createContext, useContext } from 'react';
import { IChildrenProps as IProps } from 'types/props';
import { SearchContextType } from './types';

const Context = createContext<SearchContextType>({});

const SearchContext = ({ children }: IProps) => {
  const contextValue: SearchContextType = {};
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default SearchContext;
export const useSearchContext = () => useContext(Context);
