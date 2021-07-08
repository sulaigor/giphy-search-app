import { IGif } from 'types/gifs';

export interface IReducerPublicState {
  searchQuery: string;
  page: number;
}

export interface IReducerState extends IReducerPublicState {
  gifs: Record<number, IGif[]> | null;
}
