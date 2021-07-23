import { useState, useEffect } from 'react';

import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

function App() {

  const [chord, setChord] = useState("");
  const [instrument, setInstrument] = useState("")


  return (
  
    <>
      <div className="app">
        <Sidebar />
        <Main instrument = {instrument} onChoose = { (inst) => setInstrument(inst)}/>
      </div>
      <Footer />
    </>

  );
}

export default App;
