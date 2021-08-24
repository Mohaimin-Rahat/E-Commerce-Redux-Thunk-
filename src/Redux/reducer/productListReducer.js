import { ActionType } from "../action/ActionTypes";

const initialState = {

    productList: [],

};
const productListReducer = (state = initialState, action) => 
{
    switch (action.type) {
        case ActionType.LOAD_PRODUCT_LIST:
            return { ...state, productList: action.payload };
        default:
            return state;
    }
};

export default productListReducer;
