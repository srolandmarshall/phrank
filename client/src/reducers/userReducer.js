export default function userReducer(state = {
  userToken: "",
  userId: -1,
  reviewUser: {},
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
    case "SET_USER":
      console.log("Setting user...");
      state = {...state, userToken: action.payload.access_token, userId: action.payload.user_id, email: action.payload.email}
      return state;
    case "SET_REVIEW_USER":
      console.log("Setting reviewUser...");
      return {...state, users: {reviewUser: action.payload}}
    default:
      return state;
  }
}
