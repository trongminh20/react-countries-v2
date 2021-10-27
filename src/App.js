import React from 'react';
import { AppContext } from './Components/AppContext';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Search from "./Components/Search";
import Filter from "./Components/Filter";
import CountriesList from './Components/CountriesList';
import CountryDetail from './Components/CountryDetail';
export default function App() {
    return (
        <>
            <Header />
            <div className="tools">
                <Search />
                <Filter />
            </div>
            <Switch>
                <Route path="/" exact component={CountriesList} />
                <Route path="/:alpha2code" component={CountryDetail} />
            </Switch>
        </>
    )
}