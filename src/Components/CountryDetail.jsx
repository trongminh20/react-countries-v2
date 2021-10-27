import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from "./AppContext";

export default function CountryDetail({ match }) {
    const { detailState } = useContext(AppContext);
    const [countryDetail, setCountryDetail] = detailState;
    console.log(match);
    const fetchCountry = async () => {
        let country = await fetch(`https://restcountries.com/v2/alpha/${match.params.alpha2code}`);
        let data = await country.json();
        console.log(typeof data);
        setCountryDetail(data);
    }
    useEffect(() => {
        fetchCountry();
    }, [])
    console.log(countryDetail);
    return (

        <div>
            <div className="country-flag">
                <img src={countryDetail.flag} alt="" />
            </div>
            <div className="country-name">
                <h1>{countryDetail.name}</h1>
            </div>
            <div className="country-main-info">
                <p>{countryDetail.nativeName}</p>
                <p>{countryDetail.population}</p>
                <p>{countryDetail.region}</p>
                <p>{countryDetail.subRegion}</p>
                <p>{countryDetail.capital}</p>
                <p>{countryDetail.topLevelDomain}</p>
                <p>{JSON.stringify(countryDetail.currencies)}</p>
                {/* <p>{countryDetail[languages].name}</p> */}
            </div>

            <div className="country-border">
                {countryDetail.borders.map(bd => {
                    return <button>{bd}</button>
                })}</div>

        </div>
    )
}