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
        }
    }

    // TODO: Display different page depending on which tab is active
    render() {
        return (
            <div id="container">
                <div id="right">
                    <NavBar updateTabs={this._handleTabs.bind(this)}/>
                </div>
                <div id="left">
                    <InfoBar/>
                </div>
                <div id="source">
                    <SourceCode/>
                </div>
                <div id="content">
                    <ContentPage tabs={this.state.tabs}/>
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