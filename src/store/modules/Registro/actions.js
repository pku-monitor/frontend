import {RegisterTypes} from './actionsTypes.js'

export function SaveProductRequest(ProductsName, ManufacturerName, AmountOfProduct, AmountOfProtein, AmountOfPhenylalanine){
    return{
        type: RegisterTypes.REGISTER_PRODUCT_REQUEST,
        payload: {ProductsName, ManufacturerName, AmountOfProduct, AmountOfProtein, AmountOfPhenylalanine},
    }
}

export function SaveProductSucess(){
    
}

export function SaveProductFailure(){
    
}