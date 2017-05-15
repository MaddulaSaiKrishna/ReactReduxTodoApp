/*CONSTANTS*/
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const filterConstants = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*ACTION CREATORS*/
export function addTodo(text){
  return {
    type : ADD_TODO,
    payload : text
  }
}

export function removeTodo(index){
  return {
    type : REMOVE_TODO,
    payload : index
  }
}

export function toggleTodo(index){
  return {
    type : TOGGLE_TODO,
    payload : index
  }
}

export function setFilter(filter){
  return {
    type : SET_VISIBILITY_FILTER,
    payload : filter
  }
}
