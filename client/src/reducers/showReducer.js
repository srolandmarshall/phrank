const showExists = (state, show) => {
  return state.shows.some((s) => s.id === show.id)
}

export default function showReducer(state= {
  shows: [],
  loading: false
}, action){
  switch (action.type) {
    case "LOADING_SHOW":
      return {...state, loading: true};
    case "FETCH_SHOW":
      fetchShow(action.payload)
      break
    case "ADD_SHOW":
      if (showExists(state, action.payload)){
        alert("Show was already added!")
        return state
      }
      else {
        return {...state, loading: false, shows: [...state.shows, action.payload]}
      }
    default:
      return state;
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
