import {addUserShow} from '../actions/showActions'
const showExists = (state, show) => {
  return state.shows.some((s) => s.id === show.id)
}

export default function showReducer(state= {
  shows: [],
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
    case "DELETE_SHOW":
      const shows = state.shows.filter(show => show.id !== action.payload.id)
      return {...state, shows, deleting: false}
    default:
      return state;
  }
}
