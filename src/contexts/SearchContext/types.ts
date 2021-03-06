import { IGif } from 'types/gifs';
import { IReducerState } from './searchReducer';

interface ISearchContextActions {
  setSearchQuery: (newSearchQuery: string) => void;
  setCurrentPage: (newPage: number) => void;
  clearSearchQuery: () => void;
}

interface ISearchContextState {
  gifs: IGif[] | null;
}

export type SearchContextType = IReducerState & ISearchContextActions & ISearchContextState;
