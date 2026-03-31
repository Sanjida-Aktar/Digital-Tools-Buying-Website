import { Suspense } from 'react'
import './App.css'
import Bannar from './Components/Bannar'
import Digitools from './Components/Digitools'
import Navbar from './Components/Navbar'
import Rating from './Components/Rating'
import Step from './Components/Step'
import Prizeing from './Components/Prizeing'
import Footer from './Components/Footer'



const getModels = async () => {
  const response = await fetch('/data.json');
  const models = await response.json();
  return models;
}

function App() {

  

  const modelPromise = getModels();

  return (
    <>
      <div className='w-11/12 mx-auto'>
        <Navbar></Navbar>
        <div className="divider"></div>
      <Bannar></Bannar>
      <Rating></Rating>
      <Suspense fallback={<div>Loading...</div>}>
      <Digitools modelPromise={modelPromise}></Digitools>
      </Suspense>
      </div>

      <Step></Step>
      <Prizeing></Prizeing>
      <Footer></Footer>
    </>
  )
}

export default App
