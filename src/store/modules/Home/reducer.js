import { homeActionTypes } from "./actions.types";

export const INITIAL_STATE = {
    data: { nameOfProduct: "", amountOfProduct: "", amountOfPhenylalanine: "", NaturalProduct: "", consumptionTime: ""},
    products: [],
    loading: false,
    suggestionList: {}
}

export default function home(state = INITIAL_STATE, action) {
    switch (action.type) {
        case homeActionTypes.SEND_CONSUMITION_DATA_REQUEST: {
            const aux = { date: '1', productsName: action.payload.nameOfProduct, TotalPhenylalanine: action.payload.amountOfProduct, };
            state.products.push(aux);
            return {...state, loading: true}
        }
        case homeActionTypes.SEND_CONSUMITION_DATA_SUCESS: {
            return {...state, loading: false}
        }
        case homeActionTypes.SEND_CONSUMITION_DATA_FAILURE: {
            //persist-redux
            return {...state, loading: false}
        }


        case homeActionTypes.SEND_SUGGESTION_PRODUCT_NAME_REQUEST: {
            return {...state}
        }
        case homeActionTypes.SEND_SUGGESTION_PRODUCT_NAME_SUCESS: {
            suggestionList=action.payload;
            return {...state}
        }
        case homeActionTypes.SEND_SUGGESTION_PRODUCT_NAME_FAILURE: {
            
            return {...state}
        }
        default:
            return state;
    }
}