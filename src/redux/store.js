import { createStore, applyMiddleware } from 'redux';
import * as thunk from 'redux-thunk'; 
import pizzaReducer from './reducers';

const store = createStore(pizzaReducer, applyMiddleware(thunk.default));

export default store;


