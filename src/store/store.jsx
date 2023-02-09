import { configureStore } from "@reduxjs/toolkit";
import WeatherReducers from "../reducers";

export const store = configureStore({
    reducer : WeatherReducers
})