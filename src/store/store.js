import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import allReducers from '../reducers/index';

const store = createStore(allReducers, {}, applyMiddleware(logger, thunk));

store.subscribe(() => {})

export default store;