import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './header';
import TopBar from "./topbar";
import answer_forum_form from "./answer_forum_form";

export default class Forum extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Header/>
                <TopBar/>
                <h1>
                    Forum
                </h1>

                <h2>
                    Question and answer
                </h2>
                <p> To be posted...</p>
                <img src="http://www.quickmeme.com/img/1c/1c491f71b689e82d6e838b5d8ce5cbdfef41723662d1ce5e5cf34f32ae60a7a3.jpg"/>
                
            </div>



        );
    }
}