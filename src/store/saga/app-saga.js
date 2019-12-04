import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/es/constants';
import { NavigationActions } from 'react-navigation';

function* startUpSaga() {
  console.log('start up saga called');
  try {
    const { userName } = yield select(state => state.user);
    console.warn(userName, 'userName');
    if (userName) {
      yield put(NavigationActions.navigate({ routeName: 'Main' }));
    } else {
      yield put(NavigationActions.navigate({ routeName: 'Auth' }));
    }
  } catch (error) {
    console.log(error, 'error');
  }
}

export function* watchStartUpSaga() {
  yield all([
    takeLatest('STARTUP', startUpSaga),
    takeLatest(REHYDRATE, startUpSaga)
  ]);
}
