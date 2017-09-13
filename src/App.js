import React, { Component } from 'react';
import './App.css';
import { InfoBar } from './components/InfoBar';
import { NavBar } from './components/NavBar';
import { SourceCode } from './components/SourceCode';
import { ContentPage } from './components/ContentPage';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            tabs: [1, 0, 0, 0, 0]
        };

        this.handleTabs = this._handleTabs.bind(this);
    }

    // TODO: Change mouse over navbar buttons
    render() {
        return (
            <div id="container">
                <div id="leftContainer">
                    <div id="right">
                        <NavBar updateTabs={this.handleTabs}/>
                    </div>
                    <div id="left">
                        <InfoBar/>
                    </div>
                </div>
                <div id="rightContainer">
                    <div id="source">
                        <SourceCode tabs={this.state.tabs}/>
                    </div>
                    <div id="content">
                        <ContentPage tabs={this.state.tabs}/>
                    </div>
                </div>
            </div>
        );
    }

    _handleTabs(tabIndex) {
        this.setState({
            tabs: tabIndex
        });
    }
}