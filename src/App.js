import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Resources from './Resources';
import Articles from './Articles';
import Forum from './Forum';
import Header from './header';
import Topbar from './topbar.js';

import Home from './home.js';
import Grid from '@material-ui/core/Grid';
import {Parallax, Background} from 'react-parallax';


const Container = styled.div`	

`;

const Banner = {
	backgroundImage: 'url("https://images.unsplash.com/photo-1513625047154-f390b1b0df20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80")',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
    justifyContent: 'center',
    textAlign: 'center',	
};

const Message = {
    verticalAlign: 'center',
	textColor: '#fff',
    display: 'block',
};

const PageTitle = styled.h1`
    padding-left: 43%;
    font-size: 2.5em;
    margin-bottom: 0;
    font-family: Ubuntu;
    font-weight: 500;
    //background-color:#eeeeee;
    margin-top: 50px;
    padding-top: 1%;
    color: #fff;
    text-align: center;
`;



export default class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const Home = () => (
            <Container>
                <Header/>
                <Topbar/>
                
                <Parallax>
            	<div id="Banner" style={Banner}>
            	<Grid container spacing = {12}>
            		<PageTitle>
                        Welcome!
                    </PageTitle>
				</Grid>
					<div style={{height: '500px'}}/>
            	</div>
            	</Parallax>
            	
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

