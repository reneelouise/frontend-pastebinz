import React, { useState, useEffect, Dispatch, SetStateAction } from "react";


interface Quotes {
    index: number;
    input: string;
}


function ShowQuotes(props: { result: Array<Quotes>, setResult: (arg: Quotes[]) => void }): JSX.Element {
    const { result, setResult } = props

    const getQuotes = async () => {
        try {
            const response = await fetch("https://rbgdatabase.herokuapp.com/rbgquotes");
            const jsonData = await response.json();
            setResult(jsonData);
        }
        catch (err: any) {
            console.error(err.message)

        }
    }
    useEffect(() => {
        getQuotes();
    }, []);
    console.log(result)

    return (
        <>
            <div className="container">
                <h2>Public Pastes</h2>
                <p>{result[0].input}</p>
                {result.map((quote, index) => {
                    <div key={quote.index}>
                        <p>{quote.input}</p>
                        <p>{result[index].input}</p>
                    </div>
                }
                )}
            </div>
        </>
    );
};


export default ShowQuotes;