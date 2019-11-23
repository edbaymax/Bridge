import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({serialize: true})) ||
    compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  // eslint-disable-next-line no-undef
  if (__DEV__) {
    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
      // eslint-disable-next-line global-require
      module.hot.accept(() =>
        store.replaceReducer(require('../reducers').default),
      );

      // TODO: hot reloading of sagas
    }
  }

  return store;
}

const store = configureStore();

export default store;
export {configureStore};
