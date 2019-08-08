import {addUserShow} from '../actions/showActions'
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
        return state
      }
      else {
        return {...state, loading: false, shows: [...state.shows, action.payload]}
      }
    case "DELETE_SHOW":
      const shows = state.shows.filter(show => show.id !== action.id)
      return {...state, shows}
    case "ADD_SHOW_TO_USER":
      const userId = 3;
      const showId = action.payload.id
      addUserShow(showId, userId)
      return state;
    default:
      return state;
  }
}
