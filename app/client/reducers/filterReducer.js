export function filter(state = "SHOW_ALL",action){
  switch(action.type){
    case "SET_VISIBILITY_FILTER":
      return action.payload;
      break;
    default: return state;
  }
}
