import {ActionTypes} from '../contans/Action-type'

export const searchWeather = (input) => {
    return {
        type : ActionTypes.SEARCH_WEATHER,
        payload : input
    };
};

export const getData = (weather) => {
    return {
        type :ActionTypes.GET_DATA,
        payload : weather
    }
}

export const forecastAction = (weather) => {
    return {
        type :ActionTypes.FORECAST,
        payload : weather
    }
}