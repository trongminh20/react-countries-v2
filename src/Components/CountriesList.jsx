import React, { useContext, useEffect } from 'react';
import { AppContext } from './AppContext';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import ListItem from './ListItem';

import { darkColor, lightColor } from './styles';
import Search from "./Search";
import Filter from "./Filter";

export default function CountriesList() {

    const { dataState, modeState,
        countriesListState,
        pageState,
        listState } = useContext(AppContext);
    //data
    const [data, setData] = dataState;
    // get state from app context
    const [countries, setCountries] = countriesListState;
    const [currentPage, setCurrentPage] = pageState;
    const [countriesEachPage, setCoutriesEachPage] = listState;
    const [mode, setMode] = modeState;

    // calculating for pagination 
    const lastIndex = currentPage * countriesEachPage;
    const firstIndex = lastIndex - countriesEachPage;
    const currentCountriesList = countries.slice(firstIndex, lastIndex);

    //fetch data from api
    const fetchCountries = async () => {
        const data = await fetch('https://restcountries.com/v2/all');
        const dataToJson = await data.json();
        setData(dataToJson);
        setCountries(dataToJson);
    }
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    useEffect(() => {
        fetchCountries();

    }, [])

    return (
        <div className="main-container" style={(mode === "Light") ? darkColor : lightColor}>
            <div className="tools">
                <Search />
                <Filter />
            </div>
            <Pagination _totalPages={countries.length} _paginate={paginate} _countriesEachPage={countriesEachPage} />
            <div className="countries-list">
                {currentCountriesList.map(c => {
                    const { alpha3Code, flag, name, population, capital, region } = c;
                    return <Link to={`/${alpha3Code}`}>
                        <ListItem flag={flag}
                            name={name}
                            population={population}
                            region={region}
                            capital={capital}
                            code={alpha3Code}
                        />
                    </Link>
                })}
            </div>
        </div >
    )
}