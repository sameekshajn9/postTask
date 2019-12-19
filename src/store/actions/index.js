import {
  ON_LOGIN,
  ADD_POST,
  GET_POSTS,
  UPVOTE_POST,
  LOGOUT
} from './action-types';

export const loginUser = payload => ({
  type: ON_LOGIN,
  payload
});

export const addPost = payload => ({
  type: ADD_POST,
  payload
});

export const getAllPosts = payload => ({
  type: GET_POSTS,
  payload
});

export const upvote = payload => ({
  type: UPVOTE_POST,
  payload
});

export const logout = payload => ({
  type: LOGOUT,
  payload
});
