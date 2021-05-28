import {homeActionTypes} from './actions.types.js'

export function DataConsumptionRequest(nameOfProduct, amountOfProduct, amountOfPhenylalanine, consumptionTime){
    console.log("entrou na action")
    return{
        type: homeActionTypes.SEND_CONSUMITION_DATA,
        payload: {nameOfProduct, amountOfProduct, amountOfPhenylalanine, consumptionTime},
    }
}

export function DataConsumptionRequestSucess(){
    
}

export function DataConsumptionRequestFailure(){
    
}