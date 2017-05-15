var todosList = function(state =[],action){
  switch(action.type){
    case "ADD_TODO":
      console.log(state);
      console.log(state.length);
      var newState = state.concat({
        id:(state.length == 0) ? 1 : state[state.length - 1].id + 1,
        text:action.payload,
        completed:false
      });
      return newState;
      break;
    case "REMOVE_TODO":
      var newState = state.filter(function(item){
        return item.id != action.payload;
      });
      return newState;
      break;
    case "TOGGLE_TODO":
      var newState1 = [];
      for(var i=0;i<state.length;i++){
        if(state[i].id == action.payload){
          newState1.push({
            id:state[i].id,
            text:state[i].text,
            completed:!state[i].completed
          });
        }else{
          newState1.push(state[i]);
        }
      }
      // var newState1 = state.map(function(item,index){
      //   if(index == action.payload){
      //     item.completed = !item.completed;
      //     return item;
      //   }
      //   return item;
      // });
      return newState1;
      break;
    default: return state;
  }
}

exports.todosList = todosList;
