import { useState, useEffect } from "react"

export const QuoteComponent = () => {
    const [quote, setQuote] = useState("this will be a quote!")


    useEffect(() => {
        const apiUrl = "https://api.chucknorris.io/jokes/random?category=dev";

        const getQuote = async() => {
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log("QUOTE: ", data);
            setQuote(data.value)
        }

        getQuote();
    }, [])

    return(
        <p>{quote}</p>
    )
}