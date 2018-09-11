export const FETCH_ACTIVITIES_BEGIN = 'FETCH_ACTIVITIES_BEGIN';
export const FETCH_ACTIVITIES_SUCCESS = 'FETCH_ACTIVITIES_SUCCESS';
export const FETCH_ACTIVITIES_FAILURE = 'FETCH_ACTIVITIES_FAILURE';

export const fetchActivitiesBegin = () => ({
    type: FETCH_ACTIVITIES_BEGIN
});

export const fetchActivitiesSuccess = activities => ({
    type: FETCH_ACTIVITIES_SUCCESS,
    payload: { activities }
});

export const fetchActivitiesFailure = error => ({
    type: FETCH_ACTIVITIES_FAILURE,
    palyoad: { error }
});

export function fetchActivities() {
    // return fetch(process.env.REACT_APP_SERVER_URL + "users/activities", {
    //     headers: {"x-access-token": localStorage.getItem('token')}
    // })
    //     .then(handleError)
    //     .then(response => response.json())
    //     .then(json => {
    //         console.log(json);
    //         return json;
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    return dispatch => {
        dispatch(fetchActivitiesSuccess([{"type": "Ăn sáng", "amount": 30000, "day": 20}, {"type": "Ăn trưa", "amount": 30000, "day": 30}]));
    };
}

function handleError(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}