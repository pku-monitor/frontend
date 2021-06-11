import { RegisterTypes } from "./actionsTypes";

export const INITIAL_STATE = {
    data: {ProductsName:"", ManufacturerName:"", AmountOfProduct:"", AmountOfProtein:"", AmountOfPhenylalanine:""} ,
    loading: false,
}

export default function register(state=INITIAL_STATE, action){
    switch(action.type) {
        case RegisterTypes.REGISTER_PRODUCT_REQUEST: {
            return {...state, loading:true}
        }
        case RegisterTypes.REGISTER_PRODUCT_SUCESS:{
            return {...state, loading:false}
        }
        case RegisterTypes.REGISTER_PRODUCT_FAILURE:{
            return {...state, loading:false}
        }
        default:
            return state;
    }
}