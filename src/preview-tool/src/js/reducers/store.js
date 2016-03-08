'use strict';

import { createStore, applyMiddleware } from 'redux';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';

import { logger, promiseMiddleware } from '../middleware';
import rootReducer from './index';

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware,
    logger,
    syncHistory(browserHistory)
  )(create);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./index', () => {
      const nextReducer = require('./index');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
