import React from 'react';
import '../../styles/screens/SkillsScreen.css';

export class SkillsScreen extends React.Component {
    render() {
        return (
            <div id="skillsContainer">
                <h1>Skills</h1>
                <h3>Computer Programming</h3>
                    <p className="tab1">Object-oriented design</p>
                    <p className="tab1">Algorithm design</p>
                <h3>Video Editing</h3>
                    <p className="tab1">Adobe Premiere Pro</p>
                <h3>Teaching</h3>
                    <p className="tab1">AP Computer Science Teaching Assistant</p>
                    <p className="tab1">Significant tutoring experience in:</p>
                        <p className="tab2">AP Calculus</p>
                        <p className="tab2">Algebra</p>
                        <p className="tab2">AP Physics I and II</p>
                        <p className="tab2">Chemistry</p>
                        <p className="tab2">Mandarin Chinese</p>
            </div>
        );
    }
}