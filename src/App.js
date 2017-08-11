import React, { Component } from 'react';
import './App.css';
import { InfoBar } from './components/InfoBar';
import { NavBar } from './components/NavBar';
import { SourceCode } from './components/SourceCode';

export default class App extends Component {
    render() {
        return (
            <div id="container">
                <div id="right">
                    <NavBar />
                </div>
                <div id="left">
                    <InfoBar />
                </div>
                <div id="source">
                    <SourceCode />
                </div>
            </div>
        );
    }
}