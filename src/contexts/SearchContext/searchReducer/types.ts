import { GifType } from 'types/gifs';

export interface IReducerState {
  searchQuery: string;
  gifs: GifType[] | null;
}
