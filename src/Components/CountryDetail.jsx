import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from "./AppContext";

export default function CountryDetail({ match }) {
    const { detailState } = useContext(AppContext);
    const [countryDetail, setCountryDetail] = detailState;

    useEffect(() => {
        fetch(`https://restcountries.com/v2/alpha/${match.params.alpha2code}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            }).then(data => {
                setCountryDetail(data);
            })
    }, [])

    return (

        <div className="country-detail">
            <div className="flag">
                <img src={countryDetail.flag} alt="" />
            </div>
            <div className="info">
                <div className="name">
                    <h1>{countryDetail.name}</h1>
                </div>
                <div className="main-info">
                    <p>Native name:{countryDetail.nativeName}</p>
                    <p>Population: {countryDetail.population}</p>
                    <p>Region: {countryDetail.region}</p>
                    <p>Sub region: {countryDetail.subRegion}</p>
                    <p>Capital: {countryDetail.capital}</p>
                    <p>Domain: {countryDetail.topLevelDomain}</p>
                    <p>Currencies: {JSON.stringify(countryDetail.currencies)}</p>
                    {/* <p>{countryDetail[languages].name}</p> */}
                </div>
                {/* <div className="country-border">
                    {
                        countryDetail.borders.map(bd => {
                            return <button>{bd}</button>
                        })
                    }
                </div> */}
            </div>

        </div>
    )
}