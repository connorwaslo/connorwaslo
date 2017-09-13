import React from 'react';
import '../../styles/screens/AboutScreen.css';

export class AboutScreen extends React.Component {
    render() {
        return (
            <div id="aboutContainer">
                <h1>Connor Waslo</h1>
                <h3>BASIS Phoenix Senior</h3>

                <div id="para1">
                    <p>
                        I'm a passionate and highly motivated student who takes in pride in all of
                        my work. I will never settle for acceptable.
                    </p>
                    <p>
                        Inspired by <a href="https://minecraft.net">Minecraft</a>, I've been programming
                        since the sixth grade. I love programming, it's helped define who I am as a person.
                        I can thank the hours spent in front of the computer arguing with code for my tireless
                        work ethic, acute research ability, and goal-oriented mindset.
                    </p>
                    <p>
                        But first and foremost I'm a <b>student.</b>
                    </p>
                </div>

                {/*<div id="resume">
                    <button onClick={this._openResume.bind(this)}>Resume</button>
                </div>*/}
            </div>
        );
    }

    // TODO: Open up resume pdf in new tab
    _openResume() {
        window.open('www.google.com');
    }
}