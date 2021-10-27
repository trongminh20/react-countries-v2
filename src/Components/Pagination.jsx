import React from 'react';

export default function Pagination({ _totalPages, _countriesEachPage, _paginate }) {
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(_totalPages / _countriesEachPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination-bar">
            {
                pageNumbers.map(pn => {
                    return <button id={pn} onClick={() => _paginate(pn)}>{pn}</button>
                })
            }
        </div>
    )
}