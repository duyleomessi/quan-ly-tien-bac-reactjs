import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import allReducers from '../reducers/index';

const store = createStore(allReducers, {}, applyMiddleware(logger));

store.subscribe(() => {})