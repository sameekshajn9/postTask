export const loginUser = payload => ({
  type: 'ON_LOGIN',
  payload
});

export const addPost = payload => ({
  type: 'ADD_POST',
  payload
});

export const upvote = payload => ({
  type: 'UPVOTE_POST',
  payload
});

export const logout = payload => ({
  type: 'LOGOUT',
  payload
});
