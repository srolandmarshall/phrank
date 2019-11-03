const showExists = (state, show) => {
  return state.shows.some((s) => s.id === show.id)
}

export default function showReducer(state = {
  shows: [],
  tours: [],
  loading: false,
  saving: false,
  deleting: false
}, action){
  switch (action.type) {
    case "LOADING":
      console.log("Loading...");
      return {...state, loading: true};
    case "SAVING":
      console.log("Saving to DB...");
      return {...state, saving: true};
    case "DELETING":
      console.log("Removing from DB...");
      return {...state, deleting: true};
    case "ADD_SHOW":
      if (showExists(state, action.payload)){
        return state
      }
      else {
        return {...state, loading: false, saving: false, shows: [...state.shows, action.payload]}
      }
    case "ADD_SHOWS":
      const new_shows = action.payload.shows
      const reviews = action.payload.reviews
      return {...state, loading: false, saving: false, shows: new_shows, reviews: reviews}
    case "CLEAR_SHOWS":
      return {...state, shows: []}
    case "DELETE_SHOW":
      const shows = state.shows.filter(show => show.id !== action.payload.id)
      return {...state, shows, deleting: false}
    case "ADD_TOURS":
      return {...state, tours: action.payload}
    default:
      return state;
  }
}
