import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import { rootSaga } from './saga';
import createSagaMiddleware from 'redux-saga';
import { navMiddleware } from '../navigation';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  keyPrefix: 'v.1',
  storage: AsyncStorage
};

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
