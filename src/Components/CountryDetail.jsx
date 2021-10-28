import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from "./AppContext";
import { buttonDark, buttonLight } from './styles';
export default function CountryDetail({ match }) {
    const { detailState, modeState } = useContext(AppContext);
    const [countryDetail, setCountryDetail] = detailState;
    const [mode, setMode] = modeState;
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
    console.log(countryDetail);
    return (
        <div className="country-container">
            <div className="back-btn">
                <Link to="/">
                    <button style={(mode === "Light") ? buttonDark : buttonLight}>
                        <i className="fas fa-arrow-left"></i> Back
                    </button>
                </Link>
            </div>
            <div className="country-detail">
                <div className="flag">
                    <img src={countryDetail.flag} alt="" />
                </div>
                <div className="info">
                    <h1>{countryDetail.name}</h1>
                    <div className="main-info">
                        <div>
                            <p>Native name:{countryDetail.nativeName}</p>
                            <p>Population: {countryDetail.population}</p>
                            <p>Region: {countryDetail.region}</p>
                            <p>Sub region: {countryDetail.subRegion}</p>
                            <p>Capital: {countryDetail.capital}</p>
                        </div>
                        <div>
                            <p>Domain: {countryDetail.topLevelDomain}</p>
                            <p>Currencies: {countryDetail.currencies?.map(m => { return <span className="currency">{m.name}</span> })}</p>
                            <p>Languages: {countryDetail.languages?.map(l => { return <span className="languages">{l.name} , </span> })}</p>
                        </div>
                    </div>
                    <div className="country-border">
                        <h4>Borders:</h4>
                        {
                            countryDetail.borders?.map(bd => {
                                return <div className="tag">{bd}</div>
                                // return <button>{bd}</button>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}