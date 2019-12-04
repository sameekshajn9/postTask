import userReducer from './user-reducer';
import postReducer from './posts-reducer';
import { combineReducers } from 'redux';
import { navReducer } from '../../navigation';

export default combineReducers({
  user: userReducer,
  nav: navReducer,
  allPosts: postReducer
});
