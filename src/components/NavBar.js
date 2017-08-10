/**
 * Created by conno on 8/8/2017.
 */
import React from 'react';
import '../styles/NavBar.css';

export class NavBar extends React.Component {
    constructor() {
        super();

        this.state = {
            tabClass: '.unselectedTab'
        };

        this.handleClickTab = this.handleClickTab.bind(this);
    }

    render() {
        return (
            <nav>
                <ul>
                    <li className={this.state.tabClass}><a href="google.com"
                                                           onClick={this.handleClickTab}>About</a></li>
                    <li className={this.state.tabClass}><a href="google.com"
                                                           onClick={this.handleClickTab}>Skills</a></li>
                    <li className={this.state.tabClass}><a href="google.com"
                                                           onClick={this.handleClickTab}>Portfolio</a></li>
                    <li className={this.state.tabClass}><a href="google.com"
                                                           onClick={this.handleClickTab}>Education</a></li>
                    <li id="rightTab"
                        className={this.state.tabClass}><a href="google.com"
                                                           onClick={this.handleClickTab}>Contact</a></li>
                </ul>
            </nav>
        );
    }

    handleClickTab() {
        this.setState({
            tabClass: '.selectedTab',
        });
    }
}