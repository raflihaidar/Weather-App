import { combineReducers } from "@reduxjs/toolkit";
import { searchCity, getData,  forecastReducer } from "./setWeather";

 const WeatherReducers = combineReducers({
    searchCity : searchCity,
    getData : getData,
    getForecast : forecastReducer
 })

 export default WeatherReducers;