import React from 'react';
import { fork, all } from 'redux-saga/effects';
import watchuserLogginCalled from '../../screens/login/redux/login.saga';
import { watchStartUpSaga } from './app-saga';
import { watchPostSaga } from '../../screens/post-lists/redux/post.saga';

export function* rootSaga() {
  yield all([
    yield fork(watchStartUpSaga),
    yield fork(watchuserLogginCalled),
    yield fork(watchPostSaga)
  ]);
}
