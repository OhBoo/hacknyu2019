import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './header';
import TopBar from "./topbar";


export default class Articles extends Component {

    render() {
        return (
            <div>
                <Header/>
                <TopBar/>
                <h1>
                    Articles
                </h1>
            </div>
        )
    }
}