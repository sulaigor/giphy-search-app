import { IChildrenProps as IProps } from 'types/props';
import SearchContext from 'contexts/SearchContext';

const ContextProvider = ({ children }: IProps) => {
  return <SearchContext>{children}</SearchContext>;
};

export default ContextProvider;
