import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Column, Row } from 'simple-flexbox';

import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Menu from '@material-ui/core/Menu';
import Hidden from '@material-ui/core/Hidden';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Header from './header.js';
import TopBar from './topbar';

import { Parallax, Background } from 'react-parallax';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class HomePage extends React.Component{
    state = {
    	spacing: '16',
    };

    handleChange = key => (event, value) => {
    	this.setState({
    		[key]: value,
    	});
    };

    render()
    {
    	const {classes} = this.props;
    	const {spacing} = this.state;
         const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});	

		return (
	    <div id = "home">
		    		<Header />
		    		<TopBar />

			    <Parallax
				      blur={0}
				      bgImage={'data:image/jpeg;base64,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'}
				      bgImageAlt="the cat"
				      strength={200}
				    >
				    <Typography component = 'h1' variant = 'display2' style = {{color: '#e55d25', fontFamily: 'Neue Haas Grotesk W01 Disp,Arial,sans-serif', fontWeight: 'bold'}}>
				    <center style={{fontSize: 50, marginTop: 40}}> <b> Future Heroes </b> </center>
				    </Typography>
			    
				      <div style={{ height: '100px' }} />
   				</Parallax>

   				<Parallax
				      blur={2}
				      bgImage={'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}
				      bgImageAlt="the cat"
				      strength={200}
				    >	
				    	<Grid container spacing = {12}>

				    	<Typography component = 'h1' variant = 'display3' style = {{color: 'white', fontFamily: 'Neue Haas Grotesk W01 Disp,Arial,sans-serif', fontWeight: 'bold', marginLeft: '50px', marginTop: '50px'}} >
				    		Our Mission
				    	</Typography>

				    	<Typography component = 'p' variant = 'display1' style = {{color: 'white', fontFamily: 'Neue Haas Grotesk W01 Disp,Arial,sans-serif', fontWeight: 'normal', marginLeft: '50px', marginTop: '50px', marginRight: '50px', textIndent: '0px'}} >
				    		
				    		Our goal is to foster community amongst the children and youth within and outside Sierra Leone by alleviating their suffering generally in difficult circumstances.
				    	</Typography>
			    		</Grid>

				      <div style={{ height: '300px' }} />
   				</Parallax>

				
					
					<Parallax
				      blur={2}
				      bgImage={'http://www.dreamtemplate.com/blog/wp-content/uploads/2011/06/pic1-a36.jpg'}
				      bgImageAlt="the cat"
				      strength={200}
				    >	
				    	<Grid container spacing = {12}>

				    	<Typography component = 'h1' variant = 'display3' style = {{color: 'white', fontFamily: 'Neue Haas Grotesk W01 Disp,Arial,sans-serif', fontWeight: 'bold', marginLeft: '60px', marginTop: '50px'}} >
				    		Why help Sierra Leone?
				    	</Typography>

				    	<Typography component = 'p' variant = 'display1' style = {{color: 'white', fontFamily: 'Neue Haas Grotesk W01 Disp,Arial,sans-serif', fontWeight: 'normal', marginLeft: '50px', marginTop: '50px', marginRight: '50px', fontSize: 25}} >
				    		              
								<ul>
								- Of those age 15 and over, only 48.1% can read and write English, Mende, Temne, or Arabic
								</ul>
								<ul>
								- The child labor rate (children ages 14 and under) is 48% 
								</ul>
								<ul>
								- The percent of underweight children under the age of 5 is 18.1%
								</ul>
								<ul>
								- There are 0.02 physicians and 0.4 hospital beds for every 1000 people
								</ul>
								<ul>
								-  More than 60% of the population is living on less than 1.25 USD a day
								</ul>
								<ul>
								- The Civil war destroyed schools and left thousands homeless 
								</ul>
		        			
				    	</Typography>
			    		</Grid>

				      <div style={{ height: '200px' }} />
   				</Parallax>
					  
					<Parallax
				      blur={2}
				      bgImage={'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=406b912d33578b2d73fe1f254aed8122&auto=format&fit=crop&w=930&q=80'}
				      bgImageAlt="the cat"
				      strength={200}
				    >	
				    	<Grid container spacing = {12}>

				    	<Typography component = 'h1' variant = 'display3' style = {{color: 'white', fontFamily: 'Neue Haas Grotesk W01 Disp,Arial,sans-serif', fontWeight: 'bold', marginLeft: '60px', marginTop: '50px'}} >
				    		About Us
				    	</Typography>

				    	<Typography component = 'p' variant = 'display1' style = {{color: 'white', fontFamily: 'Neue Haas Grotesk W01 Disp,Arial,sans-serif', fontWeight: 'normal', marginLeft: '60px', marginTop: '50px', marginRight: '50px', textIndent: '0px'}} >
				    		<ul> 
		        				Our motto is "Future Heroes." <br /> <br />
		        				The Children's Foundation of Technology is a nonprofit organization that strives to support the youth in Sierra Leone. 
		        				We want to help the less priveleged children and teach them technological and media skills so they don't have to break rocks for a living like their elders. 
		        				The Children's Foundation of Technology wants to help the children grow up to be self-dependant adults. <br />
		        				
		        			</ul>
		        			<ul style = {{textIndent: '0px', fontWeight: 'lighter', fontSize: '20px'}} >
		        			Press the button below to learn more.
		        			</ul>
				    	</Typography>
				    	<Link to = "/about" style= {{color: 'white',textDecoration:'none', fontFamily: 'Neue Haas Grotesk W01 Disp,Arial,sans-serif', fontWeight: 'normal', marginLeft: '60px', marginTop: '0px', marginRight: '50px', textIndent: '0px', fontSize: '4vw'}}>
			                <Tab label = "Read More" />
			            </Link>     

			    		</Grid>

				      <div style={{ height: '300px' }} />
   				</Parallax>

		</div>

		)
    }
};

export default HomePage
