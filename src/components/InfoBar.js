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
                                <li>4.00 GPA</li>
                                <li>15 AP Exams</li>
                                <li>Student of the Year 2014-17</li>
                            </ul>
                        <li>Sports</li>
                            <ul id="infoListSports" className="paddedList">
                                <li>Varsity Volleyball Captain</li>
                                <li>Varsity Basketball</li>
                            </ul>
                        <li>Business</li>
                            <ul id="infoListBusiness" className="paddedList">
                                <li className="wrappable">The Genius Factory (Tutoring Startup)</li>
                                    <ul id="theGeniusFactory" className="paddedList">
                                        <li>Software Developer</li>
                                        <li>Tutor</li>
                                        <li>Sales Representative</li>
                                        <li>Advisory Board Member</li>
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