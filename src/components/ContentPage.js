import React from 'react';
import { AboutScreen } from './screens/AboutScreen';
import { SkillsScreen } from './screens/SkillsScreen';
import { PortfolioScreen } from './screens/PortfolioScreen';
import { EducationScreen } from './screens/EducationScreen';
import { ContactScreen } from './screens/ContactScreen';

import '../styles/ContentPage.css';

export class ContentPage extends React.Component {
    constructor() {
        super();

        this.state = {
            tab: [1, 0, 0, 0, 0],
            currTab: 0
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            tab: nextProps.tabs
        });

        let temp = 0;
        for (let i = 0; i < this.state.tab.length; i++) {
            if (this.state.tab[i] === 1) {
                temp = i;
                break;
            }
        }

        this.setState({
            currTab: temp
        });
    }

    render() {
        return (
            <div id="contentContainer">
                {this._getScreen(this.state.currTab)}
            </div>
        );
    }

    _getScreen(currTab) {
        for (let i = 0; i < this.state.tab.length; i++) {
            if (this.state.tab[i] === 1) {
                if (i === 0) {
                    return <AboutScreen/>
                } else if (i === 1) {
                    return <SkillsScreen/>
                } else if (i === 2) {
                    return <PortfolioScreen/>
                } else if (i === 3) {
                    return <EducationScreen/>
                } else {
                    return <ContactScreen/>
                }
            }
        }
    }
}