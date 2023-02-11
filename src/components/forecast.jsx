import React from 'react'
import { useSelector } from 'react-redux'

const Forecast = () => {
  const data = useSelector((state) => state.getForecast.forecast)
  const {weather} = data
  const icon = weather ? weather[0].icon : null
  const iconurl = "http://openweathermap.org/img/w/"
  const format = ".png"

  return (
    <>
    {Object.keys(data).length === 0 ? 
      null :
      <>
        <p className='my-10 text-2xl text-center'>Hourly Forecast</p>
          <div className='w-3/5 m-auto grid grid-col-1 md:grid-cols-3 text-center gap-y-5'>
            {data.list.map((item, index) => (
              <div key={index} className='border-2 p-5 rounded-2xl shadow-lg'>
                <div className='w-full flex flex-col justify-center'>
                  <p>{item.dt_txt.slice(0, 16)}</p>
                  <div className='w-2/5 m-auto  flex justify-center'>
                    <img src={iconurl + item.weather[0].icon + format} alt="icon"/>
                  </div>
                  <p>{item.weather[0].main}</p>
                  <p>{item.main.temp.toFixed()} ℃</p>
                </div>
              </div>
            ))}
          </div>
      </>
      }
    </>
  )
}

export default Forecast;