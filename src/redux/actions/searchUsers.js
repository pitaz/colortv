import {
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_REQUEST,
  SEARCH_USERS_ERROR,
} from '../actionTypes';
import {unsplash} from '../../config';
import {toJson} from 'unsplash-js';

const searchUsersRequest = () => ({
  type: SEARCH_USERS_REQUEST,
});

const searchUsersSuccess = (payload) => ({
  type: SEARCH_USERS_SUCCESS,
  payload,
});

const searchUsersFailure = (error) => ({
  type: SEARCH_USERS_ERROR,
  error,
});

export const searchUsers = (query, page) => async (dispatch) => {
  try {
    dispatch(searchUsersRequest());
    const request = await unsplash.search.users(query, page);
    const result = await toJson(request);
    return dispatch(searchUsersSuccess(result));
  } catch (error) {
    return dispatch(searchUsersFailure(error));
  }
};
