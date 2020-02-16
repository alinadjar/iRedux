import {
    ADD_TODO_SUCCESS,
    DELETE_TODO,
    FETCH_TODOS
} from '../types';

const initialState = {    
    todos: []    
}

export default function (state = initialState, action) {

    switch (action.type) {


        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }


        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.payload.id)
            }

        case FETCH_TODOS:
            return {
                ...state,
                todos: action.payload                
            }

        default:
            return state;

    }

}