import React, { useState } from 'react';
import { ADD_TODO } from '../reducers';

const TodoForm = (props) => {
    const [item, setItem] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        props.dispatch({ type: ADD_TODO, payload: { item }})
        setItem('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={item} onChange={e => setItem (e.target.value)} />
            <button>Add</button>
        </form>
    )
};

export default TodoForm;