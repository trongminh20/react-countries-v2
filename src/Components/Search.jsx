import React from 'react';
import { AppContext } from './AppContext';

export default function Form() {

    return (
        <form onSubmit>
            <input type="text" placeholder="Search country information ..." onChange />
        </form>
    )
}