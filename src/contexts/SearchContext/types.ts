import { IGif } from 'types/gifs';
import { IReducerState } from './searchReducer';

interface ISearchContextActions {
  setSearchQuery: (newSearchQuery: string) => void;
}

interface ISearchContextState {
  gifs: IGif[] | null;
}

export type SearchContextType = IReducerState & ISearchContextActions & ISearchContextState;
