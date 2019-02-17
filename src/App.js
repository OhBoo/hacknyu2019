import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Articles from './Articles';
import Forum from './Forum';
import Resources from './Resources';
import Header from './header';
import LocationSearchInput from './LocationSearchInput';
import { Parallax, Background } from 'react-parallax';

import resourceImg from './assets/SHB.png';
import blue from './assets/blue.png';

const Container = styled.div`

`;
const ButtonDiv = styled.div`
    margin-top:20%;
`;


export default class App extends Component {
    render() {
        const Home = () => (
            <Container>
                <Header/>
                    <center style={{fontSize: 20, marginTop: 20, marginLeft: 40, marginBottom:10}}> 
                        <Grid style={{height: 700}} container spacing={48}>
                            <LocationSearchInput/>
                        </Grid>
                    </center>

                <ButtonDiv>
                    <div>
                        <Grid container spacing={24} align="center">
                            <Grid item md zeroMinWidth style={{height: 400}} >
                                <a href="http://localhost:3000/Articles">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVB1AxNgGtwM3ot4J1tSRuRRRcwoSDxWv8L1CRwww0kGCFVmcxag"
                                        width="180" height="180"/>
                                </a>
                                <h2> Articles </h2>
                            </Grid>

                            <Grid item md zeroMinWidth>
                                <a href="http://localhost:3000/Resources">
                                    <img
                                        src={resourceImg}
                                        width="180" height="180"/>
                                </a>
                                <h2> Resources </h2>
                            </Grid>

                            <Grid item md zeroMinWidth>
                                <a href="http://localhost:3000/Forum">
                                    <img
                                        src="https://www.kilcooleywomenscentre.co.uk/media/uploads/sexualhealth.jpg"
                                        width="200" height="180"/>
                                </a>
                                <h2> Forum </h2>
                            </Grid>
                        </Grid>
                    </div>
                </ButtonDiv>
            </Container>

        );
        return (
            <Router>
                <div>
                    <Route exact path='' component={Home}/>
                    <Route exact path='/Resources' component={Resources}/>
                    <Route exact path='/Articles' component={Articles}/>
                    <Route exact path='/Forum' component={Forum}/>

                </div>
            </Router>
        );

    }
}

