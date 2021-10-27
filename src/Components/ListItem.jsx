import React from 'react';

export default function ListItem(props) {
    return (
        <div className="country">
            <div className="country-flag">
                <img src={props.flag} alt="" />
            </div>
            <div>
                <h3 className="country-name">{props.name}</h3>
                <div className="country-info">
                    <p>Population: {props.population}</p>
                    <p>Region: {props.region}</p>
                    <p>Capital: {props.capital}</p>
                </div>
            </div>
        </div>
    )
}