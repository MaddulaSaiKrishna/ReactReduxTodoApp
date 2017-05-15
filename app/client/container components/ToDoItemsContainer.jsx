import {connect} from 'react-redux';
import ToDoItems from './../presentational components/ToDoItems.jsx';

const mapStateToProps = function(state){
  var filteredData;
  var data = state.todosList;
  var filterApplied = state.filter;
  console.log("ReRendering!!");
  var modifiedTodos = function(allTodos,filter){
    switch(filter){
      case "SHOW_ALL":
        return allTodos;
        break;
      case "SHOW_COMPLETED":
        return allTodos.filter(t => t.completed);
        break;
      case "SHOW_ACTIVE":
        return  allTodos.filter(t => !t.completed);
        break;
      default:
        return allTodos;
    }
  }
  filteredData = modifiedTodos(data,filterApplied); // to filter according to applied filter and addd logic to dispatch filter change actions from footer component;

  return {
    data:filteredData
  }
}
const mapDispatchToProps = function(dispatch){
  return {
    toggleTodo:function(id){
      dispatch({type:"TOGGLE_TODO",payload:id});
    },
    deleteTodo: function(id){
      dispatch({type:"REMOVE_TODO",payload:id});
    }
  }
}

export const ToDoItemsContainer = connect(mapStateToProps,mapDispatchToProps)(ToDoItems);
