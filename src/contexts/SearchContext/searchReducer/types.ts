import { IGif } from 'types/gifs';

export interface IReducerPublicState {
  searchQuery: string;
  currentPage: number;
  maxPages: number;
}

export interface IReducerState extends IReducerPublicState {
  gifs: Record<number, IGif[]> | null;
}
