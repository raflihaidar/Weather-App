import { combineReducers } from "@reduxjs/toolkit";
import { searchCity, getData } from "./setWeather";

 const WeatherReducers = combineReducers({
    searchCity : searchCity,
    getData : getData
 })

 export default WeatherReducers;