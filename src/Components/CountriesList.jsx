import React, { useContext, useEffect } from 'react';
import { AppContext } from './AppContext';
import { Switch, Link, Route } from 'react-router-dom';
import Pagination from './Pagination';
import ListItem from './ListItem';
import CountryDetail from './CountryDetail';
export default function CountriesList() {
    const { countriesListState, pageState, listState } = useContext(AppContext);
    // get state from app context
    const [countries, setCountries] = countriesListState;
    const [currentPage, setCurrentPage] = pageState;
    const [countriesEachPage, setCoutriesEachPage] = listState;

    // calculating for pagination 
    const lastIndex = currentPage * countriesEachPage;
    const firstIndex = lastIndex - countriesEachPage;
    const currentCountriesList = countries.slice(firstIndex, lastIndex);

    //fetch data from api
    const fetchCountries = async () => {
        const data = await fetch('https://restcountries.com/v2/all');
        const dataToJson = await data.json();

        setCountries(dataToJson);
        console.log(dataToJson);
    }
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    useEffect(() => {
        fetchCountries();
    }, [])

    return (
        <div className="main-container">
            <Pagination _totalPages={countries.length} _paginate={paginate} _countriesEachPage={countriesEachPage} />
            <div className="countries-list">

                {currentCountriesList.map(c => {
                    const { alpha2Code, flag, name, population, capital, region } = c;
                    return <Link to={`/${alpha2Code}`}>
                        <ListItem flag={flag}
                            name={name}
                            population={population}
                            region={region}
                            capital={capital}
                            code={alpha2Code}
                        />
                    </Link>
                })}

            </div>
        </div>
    )
}