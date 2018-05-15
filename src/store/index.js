import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  /* eslint-enable */
  sagaMiddleware.run(rootSagas);

  return store;
};

export default configureStore;
