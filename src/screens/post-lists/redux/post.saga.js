import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import {
  GET_POSTS,
  UPVOTE_POST,
  ADD_POST
} from '../../../store/actions/action-types';
import { getAllPosts, addPost, upvote } from '../../../store/actions';
import { getAllPosts, upvoteTask, postTask } from '../../../api/task';

function* getAllTasksSaga() {
  try {
    const allPosts = yield call(getAllPosts);
    yield put(getAllPosts({ posts: allPosts }));
  } catch (error) {
    console.log(error, 'error');
  }
}

function* postTaskSaga(payload) {
  try {
    const response = yield call(postTask, payload);
    yield put(addPost(payload));
  } catch (error) {
    console.log(error, 'error');
  }
}

function* upvotePostSaga(payload) {
  try {
    const response = yield call(upvoteTask, payload);
    yield put(upvote(response));
  } catch (error) {
    console.log(error, 'error');
  }
}
export function* watchPostSaga() {
  yield all([
    takeLatest(GET_POSTS, getAllTasksSaga),
    takeLatest(ADD_POST, postTaskSaga),
    takeLatest(UPVOTE_POST, upvotePostSaga)
  ]);
}
