import { homeActionTypes } from "./actions.types";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const INITIAL_STATE = {
    data: { nameOfProduct: "", amountOfProduct: "", amountOfPhenylalanine: ""/*, consumptionTime: "" */ },
    products: [
        /*{ date: '1', productsName: "exemplo", TotalPhenylalanine: "500" },
        { date: '2', productsName: "exemplo", TotalPhenylalanine: "100" },
        { date: '3', productsName: "macarrao", TotalPhenylalanine: "500" },
        { date: '4', productsName: "macarrao", TotalPhenylalanine: "500" },*/
    ],
    loading: false,
}

export default function home(state = INITIAL_STATE, action) {
    async function SetPersistItem(str, aux){
        try {
            console.log("tipo: "+ typeof str+"  "+ JSON.stringify(str));
            str.push(aux);
            console.log(str);
            await AsyncStorage.setItem('products', str);
        } catch (e) {
            console.log(e);
        }
    }

    async function GetPersistItem() {
        try {
            const jsonValueParse = await AsyncStorage.getItem('products');
            console.log("teste: " + jsonValueParse);
            return JSON.parse(jsonValueParse);
        } catch (e) {
            console.log(e);
        }
    }

    switch (action.type) {
        case homeActionTypes.SEND_CONSUMITION_DATA_REQUEST: {
            try {
                const aux = { date: '1', productsName: action.payload.nameOfProduct, TotalPhenylalanine: action.payload.amountOfProduct };
                state.products.push(aux);
                SetPersistItem(GetPersistItem(),aux);
            } catch (e) {
                console.log(e);
            }
            return { ...state, loading: true }
        }
        case homeActionTypes.SEND_CONSUMITION_DATA_SUCESS: {
            return { ...state, loading: false }
        }
        case homeActionTypes.SEND_CONSUMITION_DATA_FAILURE: {
            return { ...state, loading: false }
        }
        default:
            return state;
    }
}