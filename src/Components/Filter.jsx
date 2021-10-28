import React, { useContext } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { AppContext } from './AppContext';
import { formDarkMode, formLightMode } from './styles';

export default function Filter() {
    const { dataState, modeState, countriesListState } = useContext(AppContext);
    const [mode, setMode] = modeState;
    const [countries, setCountries] = countriesListState;
    const [data, setData] = dataState;

    const handleChange = e => {
        let newList = data.filter(c => c.region === e.target.value);
        setCountries(newList);
    }
    return (
        <select className="filter" onChange={handleChange} style={(mode === "Dark") ? formLightMode : formDarkMode}>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )
}