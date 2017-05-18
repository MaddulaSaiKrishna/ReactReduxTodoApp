import React from 'react';
export default class AddTodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={addTodoVal:''};
    this.addToTextchanged = this.addToTextchanged.bind(this);
    this.addBtnHandler = this.addBtnHandler.bind(this);
  }
  addToTextchanged(e){
    this.setState({
      addTodoVal:e.target.value
    })
  }
  addBtnHandler(e){
    e.preventDefault();
    this.props.addTodoClick(this.state.addTodoVal);
    this.setState({
      addTodoVal:''
    })
  }
  render(){
    return (<form>
      <input type = "text" value = {this.state.addTodoVal} onChange = {this.addToTextchanged} placeholder = "Add new Todo here...."/>
      <input type = "submit" value = "ADD" className = "customBtn" onClick = {this.addBtnHandler}/>
    </form>)
  }
}
