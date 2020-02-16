import Axios from 'axios';
import { FETCH_TODOS, ADD_TODO_SUCCESS, Write_Error } from '../types';
import { SpinnerShow, SpinnerHide, WriteError } from '../Actions/common_actions';


export const FetchTodos_Hard_Coded_Object = () => {

    return {
        type: FETCH_TODOS,
        payload:
            [
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
            ]// end payload        
    }
}


export const FetchTodos_Hard_Coded_Thunk = () => {


    return (dispatch) => {

        //dispatch(addTodoStarted());

        setTimeout(() => {
            dispatch({
                type: FETCH_TODOS,
                payload: [
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
            });

        }, 2000);
    }
}


export const FetchTodos_Promise = () => {

    const request = Axios.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos'
    }).then(response => {

        console.log(response.data);
        return response.data;
    }).catch(e => {
        return false;
    });


    return {
        type: FETCH_TODOS,
        payload: request
    }

}

// combination of redux-thunk and redux-promise
export const FetchTodos = () => {

    return (dispatch) => {

        dispatch(SpinnerShow());

        const request = Axios.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos'
        }).then(response => {

            console.log(response.data);
            return response.data;
            //throw new Error('this is a fake error');
        }).catch(e => {
            dispatch(SpinnerHide());
            dispatch(WriteError({
                code: 500,
                message: e.message,
                error: '',
                redirect: ''
            }));
            console.log(e);
            //return e;
        });

        
        // request.then(data => {
        //     dispatch(SpinnerHide());
        //     dispatch({
        //         type: FETCH_TODOS,
        //         payload: request
        //     });
        // });

        // dispatch(SpinnerHide());
        const response = dispatch({
            type: FETCH_TODOS,
            payload: request
        });

        response.then(() => {
            //dispatch(SpinnerHide())            
            setTimeout(() => {
                dispatch(SpinnerHide())
            }, 1000);
        });


    }

}



export const AddTodo = ({ title, userId }) => {

    return (dispatch, getState) => {

        console.log('current state:', getState());

        // For example, if we want to limit our app to only 4 todo items at a time:
        //
        // const { todos } = getState();
        // if (todos.length >= 4) return;

        //dispatch(addTodoStarted());
        dispatch(SpinnerShow());

        Axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            userId,
            completed: false
        })
            .then(res => {
                // throw new Error('NOT!');
                dispatch(Add_Todo_Success(res.data));

            })
            .catch(err => {
                console.log('+++++++++++++++-----> ERROR: : '+err);
                dispatch(ADD_Todo_Failure(err))
            }).finally(
                () => dispatch(SpinnerHide())
            );
    }
}




const Add_Todo_Success = todo => ({
    type: ADD_TODO_SUCCESS,
    payload: {
        ...todo
    }
});

const ADD_Todo_Failure = error => ({
    type: Write_Error,
    payload: {
        code: 500,
        message: error.message,
        detail: error
    }
});