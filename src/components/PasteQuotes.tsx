import React, { useState } from "react";

interface Quotes {
    index: number;
    input: string;
  }
  
const PasteQuotes = (props: {
    setResult: (arg: Quotes[]) => void;
  }) => {
  async function handleSubmitQuote(input: string | null) {
    try {
      const body = { input };
      await fetch(
        "https://rbgdatabase.herokuapp.com/rbgquotes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      setInputQuote("");
      const response = await fetch(
        "https://rbgdatabase.herokuapp.com/rbgquotes"
      );
      const jsonData = await response.json();
      props.setResult(jsonData);
    } catch (err: any) {
      console.error(err.message);
    }
  }
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
      <button
        className="submitButton"
        onClick={() => handleSubmitQuote(inputQuote)}
      >
        Submit
      </button>
    </>
  );
};

export default PasteQuotes;
