import React from 'react'
import { useSelector } from 'react-redux'

const Main = () => {
  const data = useSelector(state => state.getData.data)
  console.log(data)
  const {name : cityName, main, wind, weather } = data
  const temp = main ? `${main.temp.toFixed()} ℉` : null
  const feelsLike = main ? `${main.feels_like.toFixed()} ℉` : null
  const humidity = main ? `${main.humidity}` : null
  const windSpeed = wind ? `${wind.speed.toFixed()} MPH` : null
  const mainWeather = weather ? weather[0].main : null


  return (
      <>
        {Object.keys(data).length === 0 ? 
        null
        :
        <div className='flex w-full flex-col gap-64'>
          <section className='grid gap-y-5 w-4/5 m-auto'>
          <div className='text-2xl'>{cityName}</div>
          <div className='text-5xl'>{temp}</div>
          <div className='text-lg'>{mainWeather}</div>
        </section>
        <section className='flex justify-around text-center bg-gray-300 p-3 bg-opacity-30'>
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
        </section>
        </div>
        
        }
      </>
  )
}

export default Main;