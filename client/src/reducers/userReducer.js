export default function userReducer(state = {
  userToken: "",
  userId: -1,
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
      state = {...state, userToken: action.payload.access_token, userId: action.payload.user_id}
      console.log(state)
      return state;
    default:
      return state;
  }
}
