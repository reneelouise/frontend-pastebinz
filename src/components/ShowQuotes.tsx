import React, { useEffect } from "react";


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
    }, []); // eslint-disable-line 

    console.log(result)



    return (
        <>

            <h2>Public Pastes</h2>
            <div className="container">


                {result.map((quote) => {
                    return (<div key={quote.index}>
                        <p>{quote.input}</p>
                    </div>)
                }
                )}
            </div>
        </>
    );
};


export default ShowQuotes;