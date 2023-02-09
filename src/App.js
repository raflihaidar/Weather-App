import ModalSearch from './components/Search';
import Navbar from './components/Navbar'
import Main from './components/Main';
import './App.css'
import { useSelector } from 'react-redux';

function App() {
  const data = useSelector(state => state.getData.data)
  const {weather } = data
  const mainWeather = weather ? weather[0].main : null
  const style = `App ${mainWeather}`
  return (
    <div className={style}>
      <Navbar/>
      <ModalSearch/>
      <Main/>
    </div>
  );
}

export default App;
