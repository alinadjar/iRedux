import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

import userReducer from './Reducers/user_Reducer';
import todoReducer from './Reducers/todo_Reducer';
import postReducer from './Reducers/post_Reducer';
import commonReducer from './Reducers/common_Reducer';


//-----------------------Middlewares 
import { RestMiddleware4Post } from '../webService/RestMiddleware';
const middleware = [
    reduxThunk, 
    reduxPromise, 
    RestMiddleware4Post('https://jsonplaceholder.typicode.com/posts')
];


const rootReducer = combineReducers({
    userR: userReducer,
    todoR: todoReducer,
    postR: postReducer,
    commonR: commonReducer
});




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer, /* preloadedState, */
    composeEnhancers(
        applyMiddleware(...middleware)
    ));



export default store;
