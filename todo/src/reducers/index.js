export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const initialState = {
    todo: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }]
};


export const todoReducer = (state = initialState, action) => {
    console.log('reducer state: ', state);
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, {item: action.payload.item, completed: false, id: Date.now()}]
            };
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter(todo => !todo.completed)
            };
        case TOGGLE_TODO:
            return {...state,
            todo: state.todo.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, completed: !todo.completed }
                }
                else{
                    return todo;
                }
            })
        }
        default:
            return state;
    }
}