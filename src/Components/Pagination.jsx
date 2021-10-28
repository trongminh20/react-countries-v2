import React from 'react';
import { useContext, useEffect } from 'react';
import { formLightMode, formDarkMode } from './styles';
import { AppContext } from './AppContext';

export default function Pagination({ _totalPages, _countriesEachPage, _paginate }) {
    const { modeState } = useContext(AppContext);
    const [mode, setMode] = modeState;

    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(_totalPages / _countriesEachPage); i++) {
        pageNumbers.push(i);
    }

    const handleChange = e => {
        _paginate(e.target.value)
    }

    return (
        <select className="pagination" onChange={handleChange} style={(mode === "Dark") ? formLightMode : formDarkMode}>
            {
                pageNumbers.map(pn => {
                    return <option value={pn}>page {pn}</option>
                })
            }
        </select>

    )
}