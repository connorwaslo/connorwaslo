import React from 'react';
import '../styles/SourceCode.css';

export class SourceCode extends React.Component {
    constructor() {
        super();

        this.state = {
            lines: []
        };
    }

    componentDidMount() {
        let temp = [];

        for (let i = 0; i < 3; i++) {
            temp.push(i + 1);
        }

        this.setState({
            lines: temp
        });
    }

    render() {
        return (
            <div id="sourceContainer">

                <img src={require('../res/source-code-images/SourceCodejs-Small.png')}/>

                {/*<div id="lineNumbers">
                    {this._getLineNumbers()}
                </div>
                <div id="code">
                    {this._getCode()}
                </div>*/}
            </div>
        );
    }

    _getCode() {
    }

    _getLineNumbers() {
        return this.state.lines.map(
            (i) => {
                return (
                    <p>{i}</p>
                );
            }
        );
    }
}