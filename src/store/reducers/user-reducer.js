import React from react;
import { ON_LOGIN, LOGOUT } from '../actions/action-types';

const defaultState = {
  userName: null
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ON_LOGIN: {
      console.log(state, action, 'here');
      return {
        userName: action.payload.userName
      };
    }
    case LOGOUT: {
      return {
        userName: null
      };
    }
    default:
      return state;
  }
};
export default userReducer;
