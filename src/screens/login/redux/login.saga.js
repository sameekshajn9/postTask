import { takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
// import data from '../../../../public/login.json';
// import { NavigationActions } from 'react-navigation';
// import { store } from '../../../store';
// import { loginUser } from '../../../store/actions';

import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/es/constants';
import { NavigationActions } from 'react-navigation';
import { ON_LOGIN } from '../../../store/actions/action-types';
import { loginUser } from '../../../store/actions';
import { checkUser } from '../../../api/user';

function* checkUserSaga(payload) {
  try {
    const isExists = yield call(checkUser, payload);
    if (isExists) {
      loginUser({ userName });
      store.dispatch(NavigationActions.navigate({ routeName: 'PostList' }));
    } else {
      Alert.alert('Error', 'Invalid username and password');
    }
  } catch (error) {
    console.log(error, 'error');
  }
}

export default function* watchuserLogginCalled() {
  yield takeLatest(ON_LOGIN, checkUserSaga);
}
