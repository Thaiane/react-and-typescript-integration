import React from 'react';
import CountComponent from './components/CountComponent'
import './App.css';

function App() {
  return (
    <div className="App">
      <CountComponent valorInicial={42}/>
    </div>
  );
}

export default App;