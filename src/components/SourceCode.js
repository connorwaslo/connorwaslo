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
                {this._getCode(this.state.currTab)}
            </div>
        );
    }

    _getCode(currTab) {
        for (let i = 0; i < this.state.tab.length; i++) {
            if (this.state.tab[i] === 1) {
                if (i === 0) {
                    return this._getAboutScreenSource();
                } else if (i === 1) {
                    return this._getSkillsScreenSource();
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

    _getAboutScreenSource() {
        return (
            <code id="aboutSourceContainer">
            <dl>
                <dt>import ...</dt>
                <dt className="spaceBelow">export class AboutScreen extends React.Component &#123;</dt>
                    <dd>render() &#123;</dd>
                        <dd><dd>return (</dd></dd>
                            <dd><dd><dd>&lt;div id="aboutContainer"&gt;</dd></dd></dd>
                                <dd><dd><dd><dd>&lt;h1&gt;Connor Waslo&lt;/h1&gt;</dd></dd></dd></dd>
                                <dd><dd><dd><dd className="spaceBelow">&lt;h3&gt;BASIS Phoenix Senior&lt;/h3&gt;</dd></dd></dd></dd>
                                <dd><dd><dd><dd>&lt;div id="para1"&gt;</dd></dd></dd></dd>
                                    <dd><dd><dd><dd><dd>&lt;p&gt;</dd></dd></dd></dd></dd>
                                    <dd><dd><dd><dd><dd>I'm a passionate and highly motivated student who takes pride in</dd></dd></dd></dd></dd>
                                    <dd><dd><dd><dd><dd>my work. I will never settle for acceptable.</dd></dd></dd></dd></dd>
                                    <dd><dd><dd><dd><dd>&lt;/p&gt;</dd></dd></dd></dd></dd>

                                    <dd><dd><dd><dd><dd>&lt;p&gt;</dd></dd></dd></dd></dd>
                                    <dd><dd><dd><dd><dd>&lt;/p&gt;</dd></dd></dd></dd></dd>
                                    <dd><dd><dd><dd><dd>&lt;p&gt;</dd></dd></dd></dd></dd>
                                    <dd><dd><dd><dd><dd>&lt;/p&gt;</dd></dd></dd></dd></dd>
                                <dd><dd><dd><dd>&lt;/div&gt;</dd></dd></dd></dd>
                            <dd><dd><dd>&lt;/div&gt;</dd></dd></dd>
                        <dd><dd>);</dd></dd>
                    <dd>&#125;</dd>
                <dt>&#125;</dt>
            </dl>
            </code>
        );
    }

    _getSkillsScreenSource() {
        return (
            <code id="aboutSourceContainer">
                <dl>
                    <dt className="spaceBelow">import ...</dt>
                    <dt className="spaceBelow">export class SkillsScreen extends React.Component &#123;</dt>
                        <dd>render() &#123;</dd>
                            <dd><dd>return (</dd></dd>
                                <dd><dd><dd>&lt;div id="skillsContainer"&gt;</dd></dd></dd>
                                <dd><dd><dd><dd>&lt;h1&gt;Skills&lt;/h1&gt;</dd></dd></dd></dd>
                                <dd><dd><dd><dd className="spaceBelow">&lt;h3&gt;BASIS Phoenix Senior&lt;/h3&gt;</dd></dd></dd></dd>
                                <dd><dd><dd><dd>&lt;div id="para1"&gt;</dd></dd></dd></dd>
                                <dd><dd><dd><dd><dd>&lt;p&gt;</dd></dd></dd></dd></dd>
                                <dd><dd><dd><dd><dd>I will never settle for acceptable.&lt;/p&gt;</dd></dd></dd></dd></dd>
                                <dd><dd><dd><dd><dd>&lt;p&gt;</dd></dd></dd></dd></dd>
                                <dd><dd><dd><dd><dd>&lt;/p&gt;</dd></dd></dd></dd></dd>
                                <dd><dd><dd><dd><dd>&lt;p&gt;</dd></dd></dd></dd></dd>
                                <dd><dd><dd><dd><dd>&lt;/p&gt;</dd></dd></dd></dd></dd>
                                <dd><dd><dd><dd>&lt;/div&gt;</dd></dd></dd></dd>
                                <dd><dd><dd>&lt;/div&gt;</dd></dd></dd>
                            <dd><dd>);</dd></dd>
                        <dd>&#125;</dd>
                    <dt>&#125;</dt>
                </dl>
            </code>
        );
    }
}