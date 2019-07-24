export default function showReducer(state= {
  shows: [],
  loading: false
}, action){
  switch (action.type) {
    case "LOADING_SHOW":
      return {...state, loading: true};
    case "ADD_SHOW":
      return {...state, loading: false, shows: [...state.shows, action.payload]}
    default:
      return state;
  }
}
