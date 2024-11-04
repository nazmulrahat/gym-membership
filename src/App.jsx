
import './App.css'
import Nav from './components/nav/Nav'
import Navbar from './Navbar/Navbar'
import PriceOptions from '../src/components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'

function App() {


  return (
    <>
<Navbar></Navbar>
{/* <Nav></Nav> */}

<PriceOptions></PriceOptions>


<LineChart></LineChart>
      
    </>
  )
}

export default App
