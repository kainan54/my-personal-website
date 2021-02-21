import { createStore } from 'redux';
//import logger from 'redux-logger';
import rootReducer from './root-reducer';

// array of middlewares
//const middlewares = [logger];

//pass in rootReducer and spread the middlewares array
//const store = createStore(rootReducer, applyMiddleware(...middlewares));
const store = createStore(rootReducer);

export default store;
