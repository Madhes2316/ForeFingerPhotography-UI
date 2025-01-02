import MainPage from './components/MainPage/MainPage'
import './index.css';
import './styles/global.css';
import ReactGA from "react-ga4";


const MeasurementID = "G-1LSC3G5R3V";
ReactGA.initialize(MeasurementID);

function App() {

  return (
    <>
      <MainPage />
    </>
  )
}

export default App
