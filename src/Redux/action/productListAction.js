import axios from "axios";

import { ActionType } from "./ActionTypes";

export const productLoad=(productList)=>
{
    return{
        type: ActionType.LOAD_PRODUCT_LIST,
        payload: productList,
    }
}

export const requestProducts=()=>
{
    return async (dispatch)=> 
    {
        const {data} = await 
        axios.get(" https://fakestoreapi.com/products");
        dispatch(productLoad(data));
    }
}


