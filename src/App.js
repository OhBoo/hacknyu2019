import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Resources from './Resources';
import Grid from '@material-ui/core/Grid';

import Articles from './Articles';
import Forum from './Forum';
import Header from './header';

import LocationSearchInput from './LocationSearchInput';

const Container = styled.div`


`;
const ButtonDiv = styled.div`
    margin-top:20%;
`;

export default class App extends Component {

<<<<<<< HEAD
    }

=======
>>>>>>> bca8b29a8f968b891f38cdab3fb6e38da5f15849
    render() {
        const Home = () => (
            <Container>
                <Header/>
                <LocationSearchInput/>

<<<<<<< HEAD
                <div style={{padding:70}}>
                    <Grid style={{height:500}} container spacing={32} direction="row" align="center" >
                        <Grid item md zeroMinWidth>
                            <a href="http://localhost:3000/Articles">
                                <img src="http://www.evanstonoutreach.org/wp-content/uploads/2018/04/sham_2016-1000x641.jpg" width="360" height="180" />
                            </a>
                            <h2> Articles </h2>
                        </Grid>

                        <Grid item md zeroMinWidth>
                            <a href="http://localhost:3000/Resources">
                                <img src="http://www.evanstonoutreach.org/wp-content/uploads/2018/04/sham_2016-1000x641.jpg" width="360" height="180" />
                            </a>
                            <h2> Resources </h2>
                        </Grid>

                        <Grid item md zeroMinWidth>
                            <a href="http://localhost:3000/Forum">
                                <img src="http://www.evanstonoutreach.org/wp-content/uploads/2018/04/sham_2016-1000x641.jpg" width="360" height="180" />
                            </a>
                            <h2> Forum </h2>
=======
                <ButtonDiv>
                    <div style={{padding: 70}}>
                        <Grid style={{height: 500}} container spacing={32} direction="row" align="center">
                            <Grid item md zeroMinWidth>
                                <a href="http://localhost:3001/Articles">
                                    <img
                                        src="http://www.evanstonoutreach.org/wp-content/uploads/2018/04/sham_2016-1000x641.jpg"
                                        width="360" height="180"/>
                                </a>
                                <h2> Articles </h2>
                            </Grid>

                            <Grid item md zeroMinWidth>
                                <a href="http://localhost:3001/Resources">
                                    <img
                                        src="http://www.evanstonoutreach.org/wp-content/uploads/2018/04/sham_2016-1000x641.jpg"
                                        width="360" height="180"/>
                                </a>
                                <h2> Resources </h2>
                            </Grid>

                            <Grid item md zeroMinWidth>
                                <a href="http://localhost:3001/Forum">
                                    <img
                                        src="http://www.evanstonoutreach.org/wp-content/uploads/2018/04/sham_2016-1000x641.jpg"
                                        width="360" height="180"/>
                                </a>
                                <h2> Forum </h2>
                            </Grid>
>>>>>>> bca8b29a8f968b891f38cdab3fb6e38da5f15849
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

