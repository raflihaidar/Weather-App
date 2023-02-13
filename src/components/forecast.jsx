import BasicModal from './BasicModal'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Forecast = () => {
  const [open, setOpen] = useState(false)
  const [modalContent, setModalContent] = useState([])
  const data = useSelector((state) => state.getForecast.forecast)
  const iconurl = "http://openweathermap.org/img/w/"
  const format = ".png"

  const handleModal = (item) => {
    setOpen(true)
    setModalContent([item])
  }

  useEffect(() => {
    console.log(modalContent)
  })

  return (
    <>
    {Object.keys(data).length === 0 ? 
      <div></div> :
      <div className='mt-16 p-5'>
        <p className='mb-5 text-2xl text-center'>Three Hour Forecast</p>
          <div className='w-3/5 m-auto grid grid-cols-1 md:grid-cols-5 text-center gap-5'>
            {data.list.map((item, index) => (
              <div>
                <div key={index} className=' p-5 rounded-2xl shadow-lg bg-gray-200 cursor-pointer' onClick={() => handleModal(item)}>
                  <div className='w-full flex flex-col justify-center'>
                    <p>{item.dt_txt.slice(0, 16)}</p>
                    <div className='w-2/5 m-auto  flex justify-center'>
                      <img src={iconurl + item.weather[0].icon + format} alt="icon"/>
                    </div>
                    <p>{item.weather[0].main}</p>
                    <p>{item.main.temp.toFixed()} ℃</p>
                  </div>
                </div>
                <BasicModal open={open} onClose={() => setOpen(false)} modalContent={modalContent}/>
              </div>
            ))}
          </div>
      </div>
      }
    </>
  )
}

export default Forecast;