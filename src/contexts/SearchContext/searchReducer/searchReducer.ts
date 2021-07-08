import { IGif } from 'types/gifs';
import { ReducerFunctionType } from 'types/reducer';
import { SET_GIFS, SET_MAX_PAGE, SET_PAGE, SET_SEARCH_QUERY } from './actionTypes';
import { IReducerState } from './types';

const searchReducer: ReducerFunctionType<IReducerState> = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: payload?.newSearchQuery as string,
      };

    case SET_PAGE:
      return {
        ...state,
        page: Math.max(payload?.newPage as number, 0),
      };

    case SET_MAX_PAGE:
      return {
        ...state,
        maxPages: Math.max(state.page, payload?.newMaxPages as number),
      };

    case SET_GIFS:
      return {
        ...state,
        gifs: { ...state.gifs, [state.page]: payload?.newGifs as IGif[] },
      };

    default:
      return state;
  }
};

export default searchReducer;
