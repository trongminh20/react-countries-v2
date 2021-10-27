import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    //list of countries fetch from API
    const [countries, setCountries] = useState([]);
    //dark mode or light mode
    const [mode, setMode] = useState('Light');
    //style based on mode
    const [style, setStyle] = useState({});
    //country detail 
    const [countryDetail, setCountryDetail] = useState({});
    //pagination data
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesEachPage, setCoutriesEachPage] = useState(12);
    return (
        <AppContext.Provider value={{
            countriesListState: [countries, setCountries],
            modeState: [mode, setMode],
            styleState: [style, setStyle],
            detailState: [countryDetail, setCountryDetail],
            pageState: [currentPage, setCurrentPage],
            listState: [countriesEachPage, setCoutriesEachPage]
        }}>
            {props.children}
        </AppContext.Provider>
    )
}