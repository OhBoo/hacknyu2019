import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Resources from './Resources';
import Articles from './Articles';
import Forum from './Forum';
import Header from './header';
import Topbar from './topbar.js';
const Container = styled.div`

`;
const BoxContainer = styled.div`
`

export default class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const Home = () => (
            <Container>
                <Header/>
                <Topbar/>
            </Container>

        );
        return (
            <Router>
                <div>
                    <Route exact path='' component={Home}/>
                    <Route exact path='/Resources' component ={Resources}/>
                    <Route exact path='/Articles' component={Articles}/>
                    <Route exact path='/Forum' component={Forum}/>
                </div>
            </Router>


        );
    }
}

