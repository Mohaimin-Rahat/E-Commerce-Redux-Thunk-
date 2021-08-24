import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import mainReducer from '../reducer/index';


const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(mainReducer,composeEnhancer);

export default store