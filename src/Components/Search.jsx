import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { formDarkMode, formLightMode } from './styles';
export default function Form() {
    const { searchState, dataState, countriesListState, modeState } = useContext(AppContext);
    const [countries, setCountries] = countriesListState;
    const [keyword, setKeyword] = searchState;
    const [mode, setMode] = modeState;
    const [data, setData] = dataState;

    const handleChange = e => {
        setKeyword(e.target.value)

    }
    const handleSubmit = e => {
        e.preventDefault();
        if (keyword === "") {
            setCountries(data);
        } else {
            const list = data.filter(d => d.name.toLowerCase() === keyword.toLowerCase());
            setCountries(list);
        }
    }
    return (
        <form className="search" value={keyword} onSubmit={handleSubmit} style={(mode === "Dark") ? formLightMode : formDarkMode}>
            <input className="search-input" type="text" placeholder="Search country information ..." onChange={handleChange} />
            <buttton className="search-btn" type="submit"><i className="fas fa-search"></i></buttton>

        </form>
    )
}