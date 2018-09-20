import {
    FETCH_ACTIVITIES_BEGIN,
    FETCH_ACTIVITIES_SUCCESS,
    FETCH_ACTIVITIES_FAILURE,
    ADD_ACTIVITY_BEGIN,
    ADD_ACTIVITY_SUCCESS,
    ADD_ACTIVITY_FAILURE
} from '../actions/activityActions';

const initialState = {
    activities: [],
    loading: false,
    error: null,
    isAdd: false
}

export default function(state=initialState, action) {
    switch(action.type) {
        case FETCH_ACTIVITIES_BEGIN:
            return {...state, loading: true, error: null}
        case FETCH_ACTIVITIES_SUCCESS:
            return {...state, activities: action.payload.activities, loading: false, error: null}
        case FETCH_ACTIVITIES_FAILURE:
            return {...state, loading: false, error: action.payload.error}

        case ADD_ACTIVITY_BEGIN:
            return {...state, isAdd: true, error: null}
        case ADD_ACTIVITY_SUCCESS:
            return {...state, activities: [...state.activities, action.payload], isAdd: false, error: null}
        case ADD_ACTIVITY_FAILURE:
            return {...state, isAdd: false, error: action.payload.error}
        default:
            return state;
    }
}
