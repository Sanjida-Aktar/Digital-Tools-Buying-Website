import './App.css'
import Bannar from './Components/Bannar'
import Navbar from './Components/Navbar'
import Rating from './Components/Rating'

function App() {
  

  return (
    <>
      <div className='w-11/12 mx-auto'>
        <Navbar></Navbar>
        <div className="divider"></div>
      <Bannar></Bannar>
      <Rating></Rating>
      </div>
    </>
  )
}

export default App
