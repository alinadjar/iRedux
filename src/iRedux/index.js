import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import userReducer from './Reducers/user_Reducer';

const rootReducer = combineReducers({
    userR: userReducer
});

const middleware = [];


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer, /* preloadedState, */ 
    composeEnhancers(    
        applyMiddleware(...middleware)
      ));



export default store;
