import React from 'react';

export default class FilterOptions extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <p>
        <a href="#" onClick = { () => this.props.filterChanged("SHOW_ALL")}>Show All</a>
        <a href="#" onClick = { () => this.props.filterChanged("SHOW_ACTIVE")}>Show Active</a>
        <a href="#" onClick = { () => this.props.filterChanged("SHOW_COMPLETED")}>Show Completed</a>
      </p>
    )
  }
}
