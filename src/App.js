import React, { useContext } from 'react';
//states
import { AppContext } from './Components/AppContext';
//routing
import { Route, Switch } from 'react-router-dom';
//components
import Header from './Components/Header';

import CountriesList from './Components/CountriesList';
import CountryDetail from './Components/CountryDetail';
//styling components
import { darkColor, lightColor } from './Components/styles';

export default function App() {
    const { modeState } = useContext(AppContext);
    const [mode, setMode] = modeState;

    return (
        <section className='app' style={(mode === "Dark") ? lightColor : darkColor}>
            <Header />
            <Switch>
                <Route path="/" exact component={CountriesList} />
                <Route path="/:alpha2code" exact component={CountryDetail} />
            </Switch>
        </section>
    )
}