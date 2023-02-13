

 const Search = ({searchCity, getWeather}) => {


  return (
    <div className='flex justify-between p-3 w-4/5 mx-auto my-10 border-2 rounded-xl  bg-gray-200 shadow-lg'>
      <input type="text" className="border-none outline-none input w-full bg-transparent" onChange={searchCity} placeholder="Masukkan Nama Kota Anda"/> 
      <button onClick={getWeather} className="bg-gray-800 p-3 rounded-3xl">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-300">
        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
      </svg>
      </button>
    </div>
  )
}

export default Search;