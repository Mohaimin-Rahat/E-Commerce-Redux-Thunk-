import { combineReducers } from "redux";
import productDetailsReducer from './productDetailsReducer';
import productListReducer from './productListReducer';


const mainReducer = combineReducers(
{

    productListReducer,
    productDetailsReducer,
    
    
});

export default  mainReducer;