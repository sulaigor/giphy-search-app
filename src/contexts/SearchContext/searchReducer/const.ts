import { IReducerState } from './types';

export const initialState: IReducerState = {
  searchQuery: '',
  currentPage: 1,
  maxPages: 1,
  gifs: null,
};
