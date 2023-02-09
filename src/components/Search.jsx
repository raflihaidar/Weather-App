import { useDispatch, useSelector } from 'react-redux'
import { searchWeather, getData } from '../Actions/weatherAction'
import swal from 'sweetalert'
import axios from 'axios'

 const Search = () => {
  const city = useSelector((state) => state.searchCity.city)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=947d5b88220e3f08168dd065fcfbc221`
  const dispatch = useDispatch()
  const input = document.querySelector(".input")

  const searchCity = (e) => {
    dispatch(searchWeather(e.target.value))
  }
  const getWeather = async () => {
    const response = await axios
    .get(url)
    .catch(() => {
      swal({
        title: "Not Found",
        icon: "warning",
        dangerMode: true,
      })
      dispatch(getData({}))
    })
    input.value = ""
    dispatch(getData(response.data))
  }

  return (
    <div className='flex justify-between m-10 p-3 w-5/5 border-2 rounded-md bg-opacity-30 bg-gray-300'>
      <input type="text" className="border-none outline-none input w-full bg-transparent" onChange={searchCity}/> 
      <button onClick={getWeather} className="bg-gray-800 p-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-300">
        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
      </svg>
      </button>
    </div>
  )
}

export default Search;