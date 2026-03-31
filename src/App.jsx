// import axios from 'axios';
import { Suspense, useState } from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Players from './components/players/Players';


const fetchPlayer = async() =>{
  const res = await fetch("/data.json");
  return res.json();
}

const playerPromise = fetchPlayer();

function App() {
  const [money, setMoney] = useState(50000);

  return (
    <>
        <Navbar money = {money}></Navbar>
        <Hero></Hero>
        <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
          <Players money = {money} setMoney = {setMoney} playerPromise = {playerPromise}></Players>
        </Suspense>
    </>
  )
}

export default App
