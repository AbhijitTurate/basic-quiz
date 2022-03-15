import logo from './logo.svg';
import './App.css';
import Start from './Components/Start';
import Quiz from './Components/Quiz';
import Navbar from './Components/Navbar';
import Blob1 from './Components/BlobSvg1';
import Blob2 from './Components/BlobSvg2';
import React, { useState } from 'react'
function App() {
  const [start,SetStart]= useState(false)
  return (
    
    <div className="App">
      <Navbar/>
    
      {start ? <Quiz/> : <Start props={SetStart} /> }
    </div>
  );
}

export default App;
