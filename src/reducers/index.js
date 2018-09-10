import {combineReducers} from 'redux';

import activityReducer from './activityReducer';

const allReducers = combineReducers({
    activityReducer: activityReducer
});

export default allReducers;
