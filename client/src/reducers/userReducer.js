export default function userReducer(state = {
  userToken: "",
  userId: -1,
  profileUser: {},
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
      if (action.payload.user_id > 0)
        {
          state = {...state, userToken: action.payload.access_token, userId: action.payload.user_id, email: action.payload.email}
        }
      return state;
    case "LOG_OUT_USER":
      return state = {...state,
        userToken: "",
        userId: -1,
        profileUser: {},
        reviewUser: {},
        loading: false,
        saving: false,
        deleting: false
      }
    case "SET_USER_PROFILE":
      console.log("Setting user for view...");
      state = {...state, profileUser: action.payload}
      return state;
    case "SET_REVIEW_USER":
      console.log("Setting reviewUser to "+ action.payload.id);
      return {...state, reviewUser: action.payload}
    default:
      return state;
  }
}
