import React from 'react'
import "./Symbol.scss";
import { RiMessengerLine } from 'react-icons/ri';
function Symbol() {
    return (
        <div className="symbol">
            <button><RiMessengerLine className="icon" /></button>
        </div>
    )
}

export default Symbol
