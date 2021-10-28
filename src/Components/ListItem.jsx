import React, { useContext } from 'react';
import { AppContext } from "./AppContext";
import { itemLightMode, itemDarkMode } from "./styles";

export default function ListItem(props) {
    const { modeState } = useContext(AppContext);
    const [mode, setMode] = modeState;
    return (
        <div className="country" style={(mode === "Dark") ? itemLightMode : itemDarkMode}>
            <div className="country-flag">
                <img src={props.flag} alt="" />
            </div>
            <div className="item-info">
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