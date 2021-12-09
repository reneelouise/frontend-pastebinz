import React, { useState } from "react";
import ShowQuotes from "./ShowQuotes";

const PasteQuotes = () => {
  const [inputQuote, setInputQuote] = useState("");
  return (
    <>
      <h1>RBG PASTEBIN 👸</h1>

      <input
        className="add-quote"
        placeholder="add quote here"
        value={inputQuote}
        onChange={(e) => setInputQuote(e.target.value)}
      ></input>
      <br></br>
      <button className="submitButton" onClick={() => handleSubmitQuote(inputQuote)}>Subimt</button>
    </>
  );
};

async function handleSubmitQuote(input: string | null) {
try {
    
} catch (err:  any) {
    console.error(err.message)
    
}
}
export default PasteQuotes;
