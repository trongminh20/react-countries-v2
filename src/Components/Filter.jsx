import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { formDarkMode, formLightMode } from './styles';

export default function Filter() {
    const { modeState } = useContext(AppContext);
    const [mode, setMode] = modeState;
    return (
        <select style={(mode === "Dark") ? formLightMode : formDarkMode}>

        </select>
    )
}