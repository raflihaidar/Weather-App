import  './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Main from './components/Main'
import Forecast from './components/forecast'


function App() {
  return (
    <div className='App'>
        <Navbar/>
        <Search/>
        <Main/>
        <Forecast/>
    </div>
  );
}

export default App;
