import axios from 'axios';
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Players from './components/players/Players';


const fetchPlayer = async() =>{
  const res = await axios.get("/data.json");
  return res.data;
}


function App() {
  const playerPromise = fetchPlayer();
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Players playerPromise = {playerPromise}></Players>
    </>
  )
}

export default App
