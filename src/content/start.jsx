import { createContext, useState, useEffect } from "react";

export const State = createContext()


export const StatePriveder = ({ children }) => {
    let language = JSON.parse(localStorage.getItem('language'))
    const [lan, setLan] = useState(language || 'uz'); // til


    const data = {lan, setLan}

    
    useEffect(() => {
        window.localStorage.setItem('language', JSON.stringify(lan))
    }, [lan]);
    return <State.Provider value={data}>{ children }</State.Provider>
}