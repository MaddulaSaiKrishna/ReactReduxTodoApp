import React from 'react';
export default class ToDoItems extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    var liItems;
    liItems = this.props.data.map((item,index) => {
      return <li key = {item.id} className = "todoLi"><span onClick = { () => this.props.toggleTodo(item.id)} className = {item.completed ? "todoText strikeoff" : "todoText"}>{item.text}</span> <span className = "delete" onClick = {() => this.props.deleteTodo(item.id)}>x</span></li>;
    });
    return (
      <ul>
        {liItems}
      </ul>
    )
  }
}
