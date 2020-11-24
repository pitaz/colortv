import initialState from './initialState';
import {
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_REQUEST,
  SEARCH_USERS_ERROR,
} from '../actionTypes';

const searchReducer = (state = initialState.users, {payload, type, error}) => {
  switch (type) {
    case SEARCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_USERS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        data: payload,
        success: true,
      };
    case SEARCH_USERS_ERROR:
      return {
        ...state,
        error,
        loading: false,
        success: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
