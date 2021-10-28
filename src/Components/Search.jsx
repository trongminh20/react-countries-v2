import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { formDarkMode, formLightMode } from './styles';
export default function Form() {
    const { countriesListState, modeState } = useContext(AppContext);
    const [countries, seCountries] = countriesListState;
    const [mode, setMode] = modeState;
    const handleChange = e => {

    }
    const handleSubmit = e => {
        e.preventDefault();

    }
    return (
        <form className="search" onSubmit={() => handleSubmit} style={(mode === "Dark") ? formLightMode : formDarkMode}>
            <input className="search-input" type="text" placeholder="Search country information ..." onChange={() => handleChange} />
            <buttton className="search-btn" type="submit"><i className="fas fa-search"></i></buttton>

        </form>
    )
}