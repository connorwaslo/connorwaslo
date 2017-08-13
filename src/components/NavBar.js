/**
 * Created by conno on 8/8/2017.
 */
import React from 'react';
import '../styles/NavBar.css';

export class NavBar extends React.Component {
    constructor() {
        super();

        this.state = {
            colors: [
                '#609af7', '#2E86C1', '#2E86C1', '#2E86C1', '#2E86C1'
            ]
        }
    }

    render() {
        return (
            <nav>
                <ul>
                    <button style={{backgroundColor: this.state.colors[0]}} onClick={() => this._updateActiveTabs(0)}>About</button>
                    <button style={{backgroundColor: this.state.colors[1]}} onClick={() => this._updateActiveTabs(1)}>Skills</button>
                    <button style={{backgroundColor: this.state.colors[2]}} onClick={() => this._updateActiveTabs(2)}>Portfolio</button>
                    <button style={{backgroundColor: this.state.colors[3]}} onClick={() => this._updateActiveTabs(3)}>Education</button>
                    <button style={{backgroundColor: this.state.colors[4]}} onClick={() => this._updateActiveTabs(4)}>Contact</button>
                </ul>
            </nav>
        );
    }

    _updateActiveTabs(index) {
        let temp = [];

        for (let i = 0; i < this.state.colors.length; i++) {
            if (i !== index) {
                temp.push('#2E86C1');
            } else {
                temp.push('#609af7');
            }
        }

        this.setState({
            colors: temp
        });

        console.log(temp);
    }
}