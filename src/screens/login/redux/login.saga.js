import { takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import data from '../../../../public/login.json';
import { NavigationActions } from 'react-navigation';
import { store } from '../../../store';
import { loginUser } from '../../../store/actions';

function* userLogginCalled({ payload }) {
  try {
    const { userName, password } = payload;
    const index = data.findIndex(
      f =>
        f.username.toLowerCase() === userName.toLowerCase() &&
        f.password.toLowerCase() === password.toLowerCase()
    );
    if (index > -1) {
      loginUser({ userName });
      store.dispatch(NavigationActions.navigate({ routeName: 'PostList' }));
    } else {
      Alert.alert('Error', 'Invalid username and password');
    }
  } catch {
    error => console.log(error);
  }
}

export default function* watchuserLogginCalled() {
  yield takeLatest('ON_LOGIN', userLogginCalled);
}
