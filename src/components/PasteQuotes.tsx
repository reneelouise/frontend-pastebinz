import React, { useState } from "react";

const PasteQuotes = () => {
  async function handleSubmitQuote(input: string | null) {
    try {
      const body = { input };
      const response = await fetch(
        "https://rbgdatabase.herokuapp.com/rbgquotes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      setInputQuote("");
      console.log("I am the body", body);
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
        Subimt
      </button>
    </>
  );
};

export default PasteQuotes;
