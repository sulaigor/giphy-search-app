import { ReducerFunctionType } from 'types/reducer';
import { SET_SEARCH_QUERY } from './actionTypes';
import { IReducerState } from './types';

const searchReducer: ReducerFunctionType<IReducerState> = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: payload?.newSearchQuery as string,
      };

    default:
      return state;
  }
};

export default searchReducer;
