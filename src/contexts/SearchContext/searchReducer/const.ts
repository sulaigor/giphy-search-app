import { IReducerState } from './types';

export const initialState: IReducerState = {
  searchQuery: '',
  page: 1,
  maxPages: 1,
  gifs: null,
};
