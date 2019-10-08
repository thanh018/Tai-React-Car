import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import localforage from 'localforage';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const localStore = localforage.createInstance({
  name: 'line-drk',
  storeName: 'nms',
});

const persistConfig = {
  key: 'root',
  storage: localStore,
  whitelist: ['language', 'currency'],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose

  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers = process.env.NODE_ENV !== 'production'
  && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: false,
  }) : compose;
  /* eslint-enable */

  const store = createStore(
    connectRouter(history)(persistedReducer),
    initialState,
    composeEnhancers(...enhancers),
  );

  // Make reducers hot reloadable

  if (module.hot) {
    module.hot.accept(() => {
      // This fetch the new state of the above reducers.
      const nextRootReducer = require('./reducers'); // eslint-disable-line
      store.replaceReducer(
        connectRouter(history)(persistReducer(persistConfig, nextRootReducer)),
      );
    });
  }
  const persistor = persistStore(store);
  // Saga
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
}
