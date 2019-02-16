import React, {Component} from 'react';
import styled from 'styled-components';
import Header from "./header";
import TopBar from "./topbar";

const Title = styled.h1`
font-size: 50px;    

`;


export default class Resources extends Component {

    render() {
        return (
            <div>
                <Header/>
                <TopBar/>
                <Title>
                    Look at all these resources
                </Title>
            </div>
        )
    }
}