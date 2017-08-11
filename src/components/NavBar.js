/**
 * Created by conno on 8/8/2017.
 */
import React from 'react';
import '../styles/NavBar.css';

export class NavBar extends React.Component {
    constructor() {
        super();

        this.state = {
            activeIndex: 0
        }
    }

    render() {
        return (
            <nav>
                <ul>
                    <li><a href="javasript:;">About</a></li>
                    <li><a href="javasript:;">Skills</a></li>
                    <li><a href="javasript:;">Portfolio</a></li>
                    <li><a href="javasript:;">Education</a></li>
                    <li id="rightTab"><a href="javasript:;">Contact</a></li>
                </ul>
            </nav>
        );
    }
}