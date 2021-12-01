import {homeActionTypes} from './actions.types.js'

export function DataConsumptionRequest(nameOfProduct, amountOfProduct, amountOfPhenylalanine, NaturalProduct/*, consumptionTime*/){
    return{
        type: homeActionTypes.SEND_CONSUMITION_DATA_REQUEST,
        payload: {nameOfProduct, amountOfProduct, amountOfPhenylalanine, NaturalProduct/*, consumptionTime*/},
    }
}

export function DataConsumptionRequestSucess(){
    return{
        type: homeActionTypes.SEND_CONSUMITION_DATA_SUCESS,
    }
}

export function DataConsumptionRequestFailure(){
    
}

export function DataProductSuggestionRequest(nameOfProduct){
    return{
        type: homeActionTypes.SEND_SUGGESTION_PRODUCT_NAME_REQUEST,
        payload: {nameOfProduct},
    }
}

export function DataProductSuggestionSucess(data){
    //console.log("dados que veio" + data);
    return{
        type: homeActionTypes.SEND_SUGGESTION_PRODUCT_NAME_SUCESS,
        payload: {data},
    }
}

export function DataProductSuggestionFailure(){
    
}