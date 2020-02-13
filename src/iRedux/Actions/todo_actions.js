import Axios from 'axios';
import { FETCH_TODOS, ADD_TODO_STARTED, ADD_TODO_SUCCESS, ADD_TODO_FAILURE } from '../types';


export const FetchTodos = () => {

    console.log('Now inside Fetch Todos.');

    return {
        type: FETCH_TODOS,
        payload: {
            list: [
                {
                    userId: 1,
                    id: 2,
                    title: 'payments arranged',
                    completed: false
                },
                {
                    userId: 1,
                    id: 3,
                    title: 'swimming time',
                    completed: false
                }
            ]
        }// end payload
    }
}


export const AddTodo = ({ title, userId }) => {

    return (dispatch, getState) => {

        console.log('current state:', getState());

        // For example, if we want to limit our app to only 4 todo items at a time:
        //
        // const { todos } = getState();
        // if (todos.length >= 4) return;

        dispatch(addTodoStarted());

        Axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            userId,
            completed: false
        })
            .then(res => {
                // throw new Error('NOT!');
                dispatch(Add_Todo_Success(res.data))
            })
            .catch(err => {
                dispatch(ADD_Todo_Failure(err.message))
            });

    }
}



const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
});

const Add_Todo_Success = todo => ({
    type: ADD_TODO_SUCCESS,
    payload: {
        ...todo
    }
});

const ADD_Todo_Failure = error => ({
    type: ADD_TODO_FAILURE,
    payload: {
        error
    }
});