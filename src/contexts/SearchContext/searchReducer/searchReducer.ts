import { IGif } from 'types/gifs';
import { ReducerFunctionType } from 'types/reducer';
import { SET_GIFS, SET_MAX_PAGE, SET_CURRENT_PAGE, SET_SEARCH_QUERY } from './actionTypes';
import { IReducerState } from './types';

const searchReducer: ReducerFunctionType<IReducerState> = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: payload?.newSearchQuery as string,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: Math.max(payload?.newCurrentPage as number, 0),
      };

    case SET_MAX_PAGE:
      return {
        ...state,
        maxPages: Math.max(state.currentPage, payload?.newMaxPages as number),
      };

    case SET_GIFS:
      return {
        ...state,
        gifs: { ...state.gifs, [state.currentPage]: payload?.newGifs as IGif[] },
      };

    default:
      return state;
  }
};

export default searchReducer;
