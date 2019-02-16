import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Title = styled.h1`
font-size: 50px;    

`;


export default class Resources extends Component {

    render() {
        return (
            <div>
                <Title>
                    Relationships are cool
                </Title>
            </div>
        )
    }
}