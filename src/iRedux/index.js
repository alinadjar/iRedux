import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

import userReducer from './Reducers/user_Reducer';
import todoReducer from './Reducers/todo_Reducer';

const rootReducer = combineReducers({
    userR: userReducer,
    todoR: todoReducer
});

const middleware = [reduxThunk, reduxPromise];


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer, /* preloadedState, */
    composeEnhancers(
        applyMiddleware(...middleware)
    ));



export default store;
