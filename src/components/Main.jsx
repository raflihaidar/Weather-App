import React from 'react'
import { useSelector } from 'react-redux'
import '../App.css'


const Main = () => {

  const data = useSelector(state => state.getData.data)
  const {name : cityName, main, wind, weather, sys } = data
  const temp = main ? `${main.temp.toFixed()} ℃` : null
  const feelsLike = main ? `${main.feels_like.toFixed()} ℃` : null
  const humidity = main ? `${main.humidity}` : null
  const windSpeed = wind ? `${wind.speed.toFixed()} MPH` : null
  const mainWeather = weather ? weather[0].main : null
  const country = sys ? sys.country : null
  const icon = weather ? weather[0].icon : null
  const iconurl = `http://openweathermap.org/img/w/${icon}.png`


  return (
      <>
        {Object.keys(data).length === 0 ? 
        <div className='w-screen h-screen'></div>
        :
        <div className='flex w-full flex-col gap-16'>
          <section className='flex justify-between items-center w-3/5 m-auto p-x-2'>
            <div className='w-3/5 grid gap-y-2'>
              <div className='text-2xl'>{cityName}, {country} </div>
              <div className='text-5xl'>{temp}</div>
            </div>
            <div className='w--2/5 text-center'>
              <img src={iconurl} alt="icon"/>
              <p className='text-lg'>{mainWeather}</p>
            </div>
          </section>

          <section className='w-4/5 m-auto'>
            <p className='text-2xl text-center mb-2'>Details</p>
            <div className='flex justify-around text-center bg-gray-200 p-3 shadow-lg rounded-xl'>
              <div>
                <p>{feelsLike}</p>
                <p>Feels Like</p>
              </div>
              <div>
                <p>{humidity} %</p>
                <p>Humidity</p>
              </div>
              <div>
                <p>{windSpeed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </section>
        </div>
        }
      </>
  )
}

export default Main;