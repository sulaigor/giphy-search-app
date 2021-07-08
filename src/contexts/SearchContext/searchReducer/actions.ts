import { IGif } from 'types/gifs';
import { IReducerAction } from 'types/reducer';
import { SET_GIFS, SET_PAGE, SET_SEARCH_QUERY } from './actionTypes';

export const setSearchQueryAction = (newSearchQuery: string): IReducerAction => ({
  type: SET_SEARCH_QUERY,
  payload: { newSearchQuery },
});

export const setPageAction = (newPage: number): IReducerAction => ({
  type: SET_PAGE,
  payload: { newPage },
});

export const setGifsAction = (newGifs: IGif[]): IReducerAction => ({
  type: SET_GIFS,
  payload: { newGifs },
});
