import { IGif } from 'types/gifs';

export interface IReducerState {
  searchQuery: string;
  page: number;
  gifs: IGif[] | null;
}
