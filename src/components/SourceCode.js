import React from 'react';
import '../styles/SourceCode.css';

export class SourceCode extends React.Component {
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
            <div id="sourceContainer">
                {/*<img src={require('../res/source-code-images/SourceCodejs-Small.png')}/>*/}

                {this._getCode(this.state.currTab)}
            </div>
        );
    }

    _getCode(currTab) {
        for (let i = 0; i < this.state.tab.length; i++) {
            if (this.state.tab[i] === 1) {
                if (i === 0) {
                    return <div id="aboutSourceContainer"/>
                } else if (i === 1) {
                    return <div id="skillsSourceContainer"/>
                } else if (i === 2) {
                    return <div id="portfolioSourceContainer"/>
                } else if (i === 3) {
                    return <div id="educationSourceContainer"/>
                } else {
                    return <div id="contactSourceContainer"/>
                }
            }
        }
    }
}