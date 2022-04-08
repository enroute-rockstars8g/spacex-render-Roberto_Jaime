import React from "react"
import "./header.css"
import logo from './logo.svg';

export function Hed() {

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="baby">SPACEX BABY</h1>
        </header>)
}