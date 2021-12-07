import React from 'react';
import './App.css';
import ShowQuotes from './components/ShowQuotes';
import PasteQuotes from './components/PasteQuotes';

function App() {
  return (
    <div className="App">
      <PasteQuotes />
      <ShowQuotes />
      
    </div>
  );
}

export default App;
