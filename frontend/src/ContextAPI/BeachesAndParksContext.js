import React, { useState, createContext } from "react";

export const BeachesAndParksContext = createContext();

export const BeachesAndParksContextProvider = props => {
    const [baps, setBaps] = useState([])
    const [selectedBeachesAndParks, setSelectedBeachesAndParks] = useState(null)

    const addBaps = (beachesandparks) => {
        setBaps([...baps, beachesandparks]);
    }

    return (
        <BeachesAndParksContext.Provider value={{
            baps, 
            setBaps, 
            addBaps, 
            selectedBeachesAndParks, 
            setSelectedBeachesAndParks,
            }}>
            {props.children}
        </BeachesAndParksContext.Provider>
    );
};