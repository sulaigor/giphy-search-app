import { IReducerState } from './types';

export const DEFAULT_CURRENT_PAGE = 1;

export const initialState: IReducerState = {
  searchQuery: '',
  currentPage: DEFAULT_CURRENT_PAGE,
  maxPages: DEFAULT_CURRENT_PAGE,
  gifs: null,
};
