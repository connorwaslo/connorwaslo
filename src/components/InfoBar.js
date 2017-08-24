/**
 * Created by conno on 8/7/2017.
 */
import React from 'react';
import '../styles/InfoBar.css';

export class InfoBar extends React.Component {
    render() {
        return (
            <div id="infoBarContainer">
                <ul id="infoListOuter">
                    <li>Connor Waslo [project]</li>
                    <ul id="infoListMiddle" className="paddedList">
                        <li>BASIS Phoenix</li>
                            <ul id="infoListSchool" className="paddedList">
                                <li>4.00 GPA.js</li>
                                <li>15 AP Exams.js</li>
                                <li>Student of the Year 2014-17.js</li>
                            </ul>
                        <li>Sports</li>
                            <ul id="infoListSports" className="paddedList">
                                <li>Varsity Volleyball Captain.css</li>
                                <li>Varsity Basketball.css</li>
                            </ul>
                        <li>Business</li>
                            <ul id="infoListBusiness" className="paddedList">
                                <li>The Genius Factory (Tutoring Startup)</li>
                                    <ul id="theGeniusFactory" className="paddedList">
                                        <li>Software Development Intern.js</li>
                                        <li>Tutor.js</li>
                                        <li>Sales Representative.js</li>
                                        <li>Advisory Board Member.js</li>
                                    </ul>
                            </ul>
                        <li>Programming</li>
                            <ul id="infoListProgramming" className="paddedList">
                                <li>Java</li>
                                <li>Javascript</li>
                                    <ul id="infoListJavascript" className="paddedList">
                                        <li>ReactJS</li>
                                        <li>React-Native</li>
                                    </ul>
                                <li>HTML and CSS</li>
                                <li>C++</li>
                                <li>C#</li>
                            </ul>
                    </ul>
                </ul>
            </div>
        );
    }
}