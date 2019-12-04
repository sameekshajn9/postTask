import React from 'react';
import { fork, all } from 'redux-saga/effects';
import watchuserLogginCalled from '../../screens/login/redux/login.saga';
import { watchStartUpSaga } from './app-saga';

export function* rootSaga() {
  yield fork(watchStartUpSaga);
  yield fork(watchuserLogginCalled);
}
