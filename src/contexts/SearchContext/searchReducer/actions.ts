import { IGif } from 'types/gifs';
import { IReducerAction } from 'types/reducer';
import { SET_GIFS, SET_MAX_PAGE, SET_CURRENT_PAGE, SET_SEARCH_QUERY, RESET_STATE } from './actionTypes';

export const setSearchQueryAction = (newSearchQuery: string): IReducerAction => ({
  type: SET_SEARCH_QUERY,
  payload: { newSearchQuery },
});

export const setCurrentPageAction = (newCurrentPage: number): IReducerAction => ({
  type: SET_CURRENT_PAGE,
  payload: { newCurrentPage },
});

export const setMaxPagesAction = (newMaxPages: number): IReducerAction => ({
  type: SET_MAX_PAGE,
  payload: { newMaxPages },
});

export const setGifsAction = (newGifs: IGif[]): IReducerAction => ({
  type: SET_GIFS,
  payload: { newGifs },
});

export const resetStateAction = (): IReducerAction => ({
  type: RESET_STATE,
});
