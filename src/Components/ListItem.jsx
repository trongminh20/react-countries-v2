import React from 'react';

export default function ListItem(props) {
    return <div className="country">
        <div>
            <img src={props.flag} alt="" />
        </div>
        <div>
            <h1 className="country-name">{props.name}</h1>
            <div className="country-info">
                <p>{props.code}</p>
                <p>Population: {props.population}</p>
                <p>Region: {props.region}</p>
                <p>Capital: {props.capital}</p>
            </div>
        </div>
    </div>
}