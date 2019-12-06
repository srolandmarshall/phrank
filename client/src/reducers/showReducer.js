const showExists = (state, show) => {
  return state.shows.some((s) => s.id === show.id)
}

export default function showReducer(state = {
  shows: [],
  userShows: [],
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
    case "USE_SHOWS":
      return {...state, loading: false, saving: false, shows: action.payload}
    case "ADD_SHOW":
      if (showExists(state, action.payload)){
        return state
      }
      else {
        return {...state, loading: false, saving: false, shows: [...state.shows, action.payload]}
      }
    case "ADD_SHOWS":
      const new_shows = action.payload
      return {...state, loading: false, saving: false, shows: new_shows}
    case "CLEAR_SHOWS":
      return {...state, shows: []}
    case "CLEAR_USER_SHOWS":
      return {...state, userShows: []}
    case "ADD_USER_SHOW":
      return {...state, loading: false, saving: false, userShows: [...state.userShows, action.payload]}
    case "USE_USER_SHOWS":
      if (action.payload.error){
        return state
      }
      else {
        return {...state, loading: false, saving: false, userShows: action.payload}
      }
    case "DELETE_USER_SHOW":
      const userShows = state.userShows.filter(show => show.id !== action.payload.id)
      return {...state, userShows, deleting: false}
    case "DELETE_SHOW":
      const shows = state.shows.filter(show => show.id !== action.payload.id)
      return {...state, shows, deleting: false}
    case "ADD_TOURS":
      return {...state, tours: action.payload}
    default:
      return state;
  }
}
