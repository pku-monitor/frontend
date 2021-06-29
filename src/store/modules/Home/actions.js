import {homeActionTypes} from './actions.types.js'

export function DataConsumptionRequest(nameOfProduct, amountOfProduct, amountOfPhenylalanine, consumptionTime){
    console.log("entrou na action")
    return{
        type: homeActionTypes.SEND_CONSUMITION_DATA_REQUEST,
        payload: {nameOfProduct, amountOfProduct, amountOfPhenylalanine, consumptionTime},
    }
}

export function DataConsumptionRequestSucess(data){
    return{
        type: homeActionTypes.SEND_CONSUMITION_DATA_SUCESS,
        payload: {data},
    }
}

export function DataConsumptionRequestFailure(){
    
}