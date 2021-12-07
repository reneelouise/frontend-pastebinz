// import React, { useState } from "react";
import React from "react";


// interface Quotes {
//     id: number,
//     input: string
// }


// const ShowQuotes = async () => {
//     const [result, setResult] = useState<Quotes[]>([])
//     try {
//         const response = await fetch("https://rbgdatabase.herokuapp.com/rbgquotes");
//         const jsonData = await response.json();
//         setResult(jsonData);
//     }
//     catch (err: any) {
//         console.error(err.message)

//     }

const ShowQuotes = () =>{

    return (
        <>
        
        <div className = "container"> 
        <table><tr>
            <td>Public Pastes</td></tr>
            </table>
{/*         
                {result.map((quote) => { 
                <div key={quote.id}>
                    <p>{quote.input}</p>
                </div>
            }

            )} */}
            
            </div>
        </>
    );
    
};


export default ShowQuotes;