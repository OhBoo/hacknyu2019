import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Resources from './Resources';
import LGBT from './LGBT';
import Articles from './Articles';
import Forum from './Forum';
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
                <h1>
                    TENDR
                </h1>
                <BoxContainer>

                </BoxContainer>
            </Container>

        );
        return (
            <Router>
                <div>
                    <Route exact path='' component={Home}/>
                    <Route exact path='/ClinicsNearby' component ={Articles}/>
                    <Route exact path='/SexHealthResources' component={Forum}/>
                    <Route exact path='/Relationships' component={Resources}/>
                </div>
            </Router>


        );
    }
}

