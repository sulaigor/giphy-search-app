import { GifType } from 'types/gifs';
import { ReducerFunctionType } from 'types/reducer';
import { SET_GIFS, SET_SEARCH_QUERY } from './actionTypes';
import { IReducerState } from './types';

const searchReducer: ReducerFunctionType<IReducerState> = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: payload?.newSearchQuery as string,
      };

    case SET_GIFS:
      return {
        ...state,
        gifs: payload?.newGifs as GifType[],
      };

    default:
      return state;
  }
};

export default searchReducer;
