export default function reviewReducer(state = {
  reviews: [],
  loading: false,
  saving: false,
  deleting: false,
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
    case "ADD_REVIEW":
      return {...state, loading: false, saving: false, reviews: [...state.reviews, action.payload]}
    case "DELETE_REVIEW":
      const reviews = action.payload
      return {...state, reviews, deleting: false}
    case "CLEAR_REVIEWS":
      return {...state, reviews: []}
    default:
      return state;
  }
}
