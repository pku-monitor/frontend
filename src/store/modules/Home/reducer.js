import { homeActionTypes } from "./actions.types";

export const INITIAL_STATE = {
    data: {nameOfProduct:"", amountOfProduct:"", amountOfPhenylalanine:"", consumptionTime:""} ,
    loading: false,
}

export default function home(state=INITIAL_STATE, action){
    console.log("entrou no reducer:")
    switch(action.type) {
        case homeActionTypes.SEND_CONSUMITION_DATA_REQUEST: {
            //console.log("nomedoproduto: "+nameOfProduct);
            return {...state, loading:true}
        }
        case homeActionTypes.SEND_CONSUMITION_DATA_SUCESS:{
            return {...state, loading:false}
        }
        case homeActionTypes.SEND_CONSUMITION_DATA_FAILURE:{
            return {...state, loading:false}
        }
        default:
            return state;
    }
}