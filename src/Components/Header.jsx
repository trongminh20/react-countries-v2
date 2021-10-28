import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';
import { headerDark, headerLight, btnSwitchDark, btnSwitchLight } from './styles';
export default function Header() {
    const { modeState } = useContext(AppContext);
    const [mode, setMode] = modeState;
    const [switchIco, setSwitchIco] = useState("far fa-lightbulb");

    const handleSwitch = () => {
        if (mode === "Light") {
            setSwitchIco("fas fa-moon");
            setMode("Dark");
        } else if (mode === "Dark") {
            setSwitchIco("far fa-lightbulb");
            setMode("Light");
        }
    }

    return (
        <div className="header" style={(mode === "Light") ? headerDark : headerLight}>
            <h1>Where in the world?</h1>
            <button className="btn-switch" onClick={() => handleSwitch()} style={(mode === "Dark") ? btnSwitchLight : btnSwitchDark}>
                <i className={switchIco} ></i>
            </button>
        </div>
    )
}