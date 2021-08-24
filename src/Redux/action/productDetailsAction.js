import axios from "axios";
import { ActionType } from "./ActionTypes";

export const currentProductLoad=(currentProduct)=> 
{
    return {
        type: ActionType.LOAD_CURRENT_PRODUCT,
        payload: currentProduct,
    };
};
export const requestProductDetails=(id)=> 
{
    return async (dispatch) => 
    {
        const {data}= await 
        axios.get( `https://fakestoreapi.com/products/${id}`);
        dispatch(currentProductLoad(data));
    };
};
export const deleteRequest=(id)=>
{
    return async (dispatch)=>
     {
        axios.delete(`https://fakestoreapi.com/products/${id}`);
    };
};

export const updateRequest=(id,update)=> 
{
    return async (dispatch)=> 
    {    
        axios.patch(`https://fakestoreapi.com/products/${id}`,update);
    };
};

