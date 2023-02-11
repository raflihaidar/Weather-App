import { ActionTypes } from "../contans/Action-type";

const initialState = {
    city : "",
    data : {},
    forecast : {}
}

export const searchCity = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SEARCH_WEATHER:
            return {...state, city:payload}
        default : 
            return state
    }
}

export const getData = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.GET_DATA:
            return {...state, data:payload}
        default :
            return state
    }
}

export const forecastReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.FORECAST:
            return {...state, forecast:payload}
        default :
            return state
    }
}

