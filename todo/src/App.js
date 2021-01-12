import React, {useReducer} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import {todoReducer, initialState} from './reducers';
import './App.css';

function App() {
  const [todo, dispatch] = useReducer(todoReducer, initialState)
  return (

    <div className="App">
      <TodoForm dispatch={dispatch} />
      <TodoList todo={todo} dispatch={dispatch} />
    </div>
  );
}

export default App;
