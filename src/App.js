import ModalSearch from './components/Search';
import Navbar from './components/Navbar'
import Main from './components/Main';
import Forecast from './components/forecast';


function App() {
  return (
    <div>
      <Navbar/>
      <ModalSearch/>
      <Main/>
      <Forecast/>
    </div>
  );
}

export default App;
