import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './header';
import TopBar from "./topbar";

const PageTitle = styled.h1`
    margin-left: 3%;
`;
const ArticleTitle = styled.h2`
    margin-left: 3%;
`;

const ArticleImg = styled.img`

`;
const ArticleVidDiv = styled.div`
    margin-left: 3%;
`;

export default class Articles extends Component {

    render() {
        return (
            <div>
                <Header/>
                <TopBar/>
                <h1>
                    Articles
                </h1>
                <ArticleTitle>Tea Consent</ArticleTitle>
                <ArticleVidDiv>
                <iframe width="600" height="400" src="https://www.youtube.com/embed/oQbei5JGiT8" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
                </ArticleVidDiv>

            </div>
        )
    }
}