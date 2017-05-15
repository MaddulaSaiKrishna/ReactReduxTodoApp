import {createStore,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {filterConstants} from './action creators/constants.js';
import {todosList} from './reducers/todosReducer.js';
import {filter} from './reducers/filterReducer.js';
import TodoApp from './presentational components/TodoApp.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

var initialState = {
  filter:filterConstants.SHOW_ALL,
  todosList:[]
}

var reducers = combineReducers({
  filter,
  todosList
});

const middleware = applyMiddleware(createLogger());
const store = createStore(reducers,initialState,middleware);


ReactDOM.render(<Provider store = {store}><TodoApp/></Provider>,document.getElementById('app'));
