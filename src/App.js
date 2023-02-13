import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Main from './components/Main';
import Forecast from './components/forecast';
import { useDispatch, useSelector } from 'react-redux';
import { searchWeather, getData, forecastAction } from './Actions/weatherAction';
import swal from 'sweetalert';
import axios from 'axios';

function App() {
  const city = useSelector((state) => state.searchCity.city);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=947d5b88220e3f08168dd065fcfbc221&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=69c185a86099f7d3788ef9097d64d59e&units=metric`;
  const dispatch = useDispatch();
  const input = document.querySelector('.input');

  const searchCity = (e) => {
    dispatch(searchWeather(e.target.value));
  };

  const getWeather = async () => {
    try {
      const response = await axios.get(url);
      input.value = '';
      dispatch(getData(response.data));
      await forecastData();
    } catch (err) {
      console.error(err);
      swal({
        title: 'Not Found',
        icon: 'warning',
        dangerMode: true,
      });
      dispatch(getData({}));
      dispatch(forecastAction({}));
    }
  };

  const forecastData = async () => {
    try {
      const response = await axios.get(forecastUrl);
      dispatch(forecastAction(response.data));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Search getWeather={getWeather} searchCity={searchCity} />
      <Main />
      <Forecast />
    </div>
  );
}

export default App;
