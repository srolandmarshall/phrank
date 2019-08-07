
const showExists = (state, show) => {
  return state.shows.some((s) => s.id === show.id)
}

export default function showReducer(state= {
  shows: [],
  loading: false
}, action){
  switch (action.type) {
    case "LOADING":
      console.log("Loading...");
      return {...state, loading: true};
    case "ADD_SHOW":
      if (showExists(state, action.payload)){
        alert("Show was already added!")
        return state
      }
      else {
        return {...state, loading: false, shows: [...state.shows, action.payload]}
      }
    case "DELETE_SHOW":
      const shows = state.shows.filter(show => show.id !== action.id)
      return {...state, shows}
    default:
      return state;
  }
}
