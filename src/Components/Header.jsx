import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';
import { darkColor, lightColor } from './styles';
export default function Header() {
    const { styleState, modeState } = useContext(AppContext);
    const [style, setStyle] = styleState;
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
        <div className="header" style={(mode === "Light") ? darkColor : lightColor}>
            <h1>Where in the world?</h1>
            <button onClick={() => handleSwitch()}>
                <i className={switchIco} ></i> {mode} Mode
            </button>
        </div>
    )
}