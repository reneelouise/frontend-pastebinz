import React, { useEffect, useState } from "react";


interface Quotes {
    index: number;
    input: string;
}


function ShowQuotes(props: { result: Array<Quotes>, setResult: (arg: Quotes[]) => void }): JSX.Element {
    const { result, setResult } = props
    const [isClicked, setIsCliked] = useState("")

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
    }, [result]); // eslint-disable-line 

    // console.log(result, "Hello world")



    return (
        <>

            <h2>Public Pastes</h2>
            <div className="container">


                {result.map((quote) => {
                    return (<div key={quote.index}>
                        <p className="textQuote" onClick={() => setIsCliked(quote.input)}>{quote.input}</p>
                        <br></br>
                    </div>)
                }
                )}
            </div>
            <h2>Expanded quotes</h2>
            <p>{isClicked}</p>
        </>
    );
};


export default ShowQuotes;