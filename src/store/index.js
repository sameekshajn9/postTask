import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import { rootSaga } from './saga';
import createSagaMiddleware from 'redux-saga';
import { navMiddleware } from '../navigation';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const persistConfig = {
  key: 'root',
  keyPrefix: 'v.1',
  storage: AsyncStorage
};

export const axiosClient = axios.create({
  baseURL: 'https://localhost:3000/api/',
  timeout: 1000
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleWare, navMiddleware)
);

persistStore(store, null, () => {
  console.log({ name: 'Persisted state', value: store.getState() });
});

sagaMiddleWare.run(rootSaga);
