import React from 'react';
import ReactDOM from 'react-dom';
import {AddTodoContainer} from './../container components/AddTodoContainer.jsx';
import {ToDoItemsContainer} from './../container components/ToDoItemsContainer.jsx';
import {FilterOptionsContainer} from './../container components/FilterOptionsContainer.jsx';

export default class TodoApp extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<div className = "todoApp">
      <AddTodoContainer/>
      <ToDoItemsContainer/>
      <FilterOptionsContainer/>
    </div>)
  }
}
