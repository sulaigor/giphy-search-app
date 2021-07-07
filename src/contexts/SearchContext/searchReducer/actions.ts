import { IReducerAction } from 'types/reducer';
import { SET_SEARCH_QUERY } from './actionTypes';

export const setSearchQuery = (newSearchQuery: string): IReducerAction => ({
  type: SET_SEARCH_QUERY,
  payload: { newSearchQuery },
});
