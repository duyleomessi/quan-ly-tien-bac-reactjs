import {
    FETCH_ACTIVITIES_BEGIN,
    FETCH_ACTIVITIES_SUCCESS,
    FETCH_ACTIVITIES_FAILURE
} from '../actions/activityActions';

const initialState = {
    activities: [],
    loading: false,
    error: null
}

export default function(state=initialState, action) {
    switch(action.type) {
        case FETCH_ACTIVITIES_BEGIN:
            return {...state, loading: true, error: null}
        case FETCH_ACTIVITIES_SUCCESS:
            return {...state, activities: action.payload.activities, loading: false, error: null}
        case FETCH_ACTIVITIES_FAILURE:
            return {...state, loading: false, error: action.payload.error}
        default:
            return state;
    }
}
