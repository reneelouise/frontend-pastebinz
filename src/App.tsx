import React, { useState } from "react";
import "./App.css";
import ShowQuotes from "./components/ShowQuotes";
import PasteQuotes from "./components/PasteQuotes";

interface Quotes {
  index: number;
  input: string;
}

function App() {
  //@ts-ignore
  const [result, setResult] = useState<Quotes[]>([]);

  return (
    <div className="App">
      <PasteQuotes setResult={setResult}/>

      <ShowQuotes result={result} setResult={setResult} />
    </div>
  );
}

export default App;
