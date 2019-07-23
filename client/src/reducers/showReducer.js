export default function showReducer(state= {

}, action){
  switch (action.type) {
    case "test":
      return "it worked"

    default:
        return state;
  }
}
