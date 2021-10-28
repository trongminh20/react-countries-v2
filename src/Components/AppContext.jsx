import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    //data fetched once
    const [data, setData] = useState([]);
    //list of countries fetch from API
    const [countries, setCountries] = useState([]);
    //country detail 
    const [countryDetail, setCountryDetail] = useState({});

    //dark mode or light mode
    const [mode, setMode] = useState("Light");
    //style based on mode
    const [style, setStyle] = useState({});

    //pagination data
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesEachPage, setCoutriesEachPage] = useState(12);

    //searching
    const [keyword, setKeyword] = useState("");
    //filter
    const [filter, setFilter] = useState("");

    return (
        <AppContext.Provider value={{
            dataState: [data, setData],
            countriesListState: [countries, setCountries],
            modeState: [mode, setMode],
            styleState: [style, setStyle],
            detailState: [countryDetail, setCountryDetail],
            pageState: [currentPage, setCurrentPage],
            listState: [countriesEachPage, setCoutriesEachPage],
            searchState: [keyword, setKeyword],
            filterState: [filter, setFilter]
        }}>
            {props.children}
        </AppContext.Provider>
    )
}