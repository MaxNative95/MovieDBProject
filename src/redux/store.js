import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, persistReducer } from 'redux-persist'

import index from './reducers';

const persistConfig = {
  key: 'root2',
  storage: AsyncStorage
}

const middlewares = [];

if (__DEV__) {
  middlewares.push(createLogger());
}

const persistedReducer = persistReducer(persistConfig, index)

export const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);