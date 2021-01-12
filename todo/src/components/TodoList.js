import React from 'react';
import Todo from './Todo';
import { DELETE_TODO } from '../reducers';

const TodoList = props => {
    console.log('TodoList props; ', props);
    return (
        <div>
            {props.todo.todo.map(todo => (
                <Todo key={todo.id} todo={todo} dispatch={props.dispatch}
                />
            ))}
            <button onClick={() => props.dispatch({type: DELETE_TODO})}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;