import React from 'react';
import { TOGGLE_TODO } from '../reducers';
import './Todo.css';

export default function Todo({ todo, dispatch }) {
    console.log(todo)
    return (
        <div onClick={() => dispatch({ type: TOGGLE_TODO, payload: { id: todo.id}})} >
        <p className={todo.completed ? "completed" : ""} >{todo.item}</p>
        </div>
    )
}