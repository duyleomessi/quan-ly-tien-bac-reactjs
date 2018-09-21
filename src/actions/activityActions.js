export const FETCH_ACTIVITIES_BEGIN = "FETCH_ACTIVITIES_BEGIN";
export const FETCH_ACTIVITIES_SUCCESS = "FETCH_ACTIVITIES_SUCCESS";
export const FETCH_ACTIVITIES_FAILURE = "FETCH_ACTIVITIES_FAILURE";

export const ADD_ACTIVITY_BEGIN = "ADD_ACTIVITIES_BEGIN";
export const ADD_ACTIVITY_SUCCESS = "ADD_ACTIVITY_SUCCESS";
export const ADD_ACTIVITY_FAILURE = "ADD_ACTIVITY_SUCCESS";

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

export const addActivityBegin = () => ({
  type: ADD_ACTIVITY_BEGIN
})

export const addActivitySuccess = (activity) => ({
  type: ADD_ACTIVITY_SUCCESS,
  payload: activity 
})

export const addActivityFailure = () => ({
  type: ADD_ACTIVITY_FAILURE
})



export function fetchActivities() {
  return dispatch => {
    dispatch(fetchActivitiesBegin());
    return fetch(process.env.REACT_APP_SERVER_URL + "users/activities", {
      headers: { "x-access-token": localStorage.getItem("token") }
    })
      .then(handleError)
      .then(response => response.json())
      .then(json => {
        dispatch(
          fetchActivitiesSuccess(json)
        );
        // return json;
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function openModalAddActivity() {
  return dispatch => {
    dispatch(addActivityBegin())
  }
}

export function addActivity(activity) {
  return dispatch => {
    return fetch(process.env.REACT_APP_SERVER_URL + "users/activity", {
      method: 'POST',
      body: JSON.stringify(activity),
      headers: { "x-access-token": localStorage.getItem("token"), 'content-type': 'application/json' },
    })
    .then(handleError)
    .then(response => response.json())
    .then(json => {
      // console.log(json)
      dispatch(addActivitySuccess(activity))
    })
    .catch(err => {
      console.log(err)
    })
  }
}


function handleError(response) {
  if (!response.ok) {
    throw Error(response);
  }
  return response;
}
