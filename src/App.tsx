import React, { useState, useEffect } from 'react';
import './App.css';
import ShowQuotes from './components/ShowQuotes';
import PasteQuotes from './components/PasteQuotes';
import SubmitButton from './components/SubmitButton';

interface Quotes {
  index: number;
  input: string;
}

function App() {
  //@ts-ignore
  const [result, setResult] = useState<Quotes[]>([]);


  return (
    <div className="App">
      <PasteQuotes />
      <SubmitButton/>
       <ShowQuotes result={result} setResult={setResult} />

    </div>
  );
}

export default App;
