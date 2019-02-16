import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Resources from './Resources';
import Articles from './Articles';
import Forum from './Forum';
import Header from './header';
import Topbar from './topbar.js';
<<<<<<< HEAD
import Home from './home.js';
import Grid from '@material-ui/core/Grid';
import {Parallax, Background} from 'react-parallax';
=======
const Container = styled.div`
>>>>>>> 97b6a5f89c6d78928e0efe3c39940a6244e0bfa7

const Container = styled.div`	

`;

const Banner = styled.div`
	background-image: url("https://images.unsplash.com/photo-1513625047154-f390b1b0df20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
	background-size: cover;
	background-repeat: no-repeat;
	
`;

const Message = styled.div`
	text-align: center;
	font-color: white;
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
            	<Banner>
            	<Grid container spacing = {12}>
            		<Message>
            		<h4>
						Welcome
						</h4>
					</Message>
				</Grid>
					<div style={{height: '500px'}}/>
            	</Banner>
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

