import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Relationships from './Relationships';
import LGBT from './LGBT';
import ClinicsNearby from './ClinicsNearby';
import SexHealthResources from './SexHealthResources';
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
                    <Route exact path='/ClinicsNearby' component ={ClinicsNearby}/>
                    <Route exact path='/LGBT' component={LGBT}/>
                    <Route exact path='/SexHealthResources' component={SexHealthResources}/>
                    <Route exact path='/Relationships' component={Relationships}/>
                </div>
            </Router>


        );
    }
}

