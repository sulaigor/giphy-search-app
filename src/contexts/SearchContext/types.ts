import { IReducerState } from './searchReducer';

interface ISearchContextActions {
  setSearchQuery: (newSearchQuery: string) => void;
}

export type SearchContextType = IReducerState & ISearchContextActions;
