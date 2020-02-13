import {
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    ADD_TODO_STARTED,
    DELETE_TODO,
    FETCH_TODOS
} from '../types';

const initialState = {
    loading: false,
    todos: [],
    error: null
}

export default function (state = initialState, action) {

    switch (action.type) {

        case ADD_TODO_STARTED:
            return {
                ...state,
                loading: true
            }

        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                loading: false,
                error: null
            }

        case ADD_TODO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.payload.id)
            }

        case FETCH_TODOS:
            return {
                ...state,
                todos: action.payload.list,
                loading: false,
                error: null
            }

        default:
            return state;

    }

}