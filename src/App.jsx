import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Players from './components/Players/Players'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Footer from './components/Footer/Footer'


const loadPlayersData = async () => {
  const res = await fetch("/data/data.json");
  return res.json();
}

function App() {
  const playersPromise = loadPlayersData();
  const [coin, setCoin] = useState(50000);

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Hero></Hero>
      <Suspense fallback={<p>....Loading</p>}>
        <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin}></Players>
      </Suspense>

      <Footer></Footer>
      

      <ToastContainer />
    </>
  )
}

export default App
