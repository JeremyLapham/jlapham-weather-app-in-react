import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainScreen from './Components/MainScreen';

function App() {
  
  return (
    <div className='clearDay'>
      <div className='circleSun'></div>
      <MainScreen />
    </div>
  );
}

export default App;
