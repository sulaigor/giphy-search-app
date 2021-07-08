import { IGif } from 'types/gifs';

export interface IReducerState {
  searchQuery: string;
  gifs: IGif[] | null;
}
