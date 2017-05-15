import {connect} from 'react-redux';
import AddTodoForm from './../presentational components/AddTodoForm.jsx';

const mapstateToProps = function(state){
  return {

  }
}
const mapDispatchToProps = function(dispatch){
  return {
    addTodoClick: (text) => {
      dispatch({type:"ADD_TODO",payload:text})
    }
  }
}

export const AddTodoContainer = connect(mapstateToProps,mapDispatchToProps)(AddTodoForm);
