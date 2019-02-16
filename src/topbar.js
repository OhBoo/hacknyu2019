import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';


class TopBar extends React.Component{

	state = {
    	anchorEl: null,
    	open: false,
  		};

  	handleClick = event => {
    	this.setState({ anchorEl: event.currentTarget });
 							 };

  	handleClose = () => {
   		this.setState({ anchorEl: null });
 	 };

 	handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
 	 };

 	 handleCloseMenu = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
 	 };



	render()
	{
		const { anchorEl } = this.state;
		const { open } = this.state;
		return(

			<div id = "topNav">
					<Hidden xsDown>
						<AppBar position="static" style = {{backgroundColor: 'black', flexGrow: 1,display: "flex", textAlign: "center"}} >
							<Tabs>
								<Grid container spacing={48}>
									<Grid item xs={12}>
									    <Link to="/Articles" style= {{color: 'white',textDecoration:'none'}}>
						            		<Tab label = "Articles" />
						            	</Link>	

									    <Link to="/Resources" style= {{color: 'white',textDecoration:'none'}}>
						            		<Tab label = "Resources" />
						            	</Link>


						            	<Link to="/Forum" style= {{color: 'white',textDecoration:'none' }}>
						            		<Tab label = "Forum" />
						            	</Link> 
						            </Grid>
								
								</Grid>
							</Tabs>
						</AppBar>
					</Hidden>	            		

					<Hidden smUp>
							<AppBar position="static" style = {{backgroundColor: 'black', marginBottom: 20, marginTop: 25, flexGrow: 1,display: "flex"}} >
									<IconButton color="inherit" aria-label="Menu" onClick={this.handleClick}>
			             			 	<MenuIcon />
			          			  	</IconButton>
			          			
							       <Menu
							          id="simple-menu"
							          anchorEl={anchorEl}
							          open={Boolean(anchorEl)}
							          onClose={this.handleClose}
							        >

							         
							<MenuItem onClick={this.handleClose}>
							    <Link to="/Relationships" style= {{color: 'black',textDecoration:'none'}}>
						           	<Tab label = "Relationships" />
						        </Link>	
							</MenuItem>

							<MenuItem onClick={this.handleClose}>
							    <Link to="/SexHealthResources" style= {{color: 'black',textDecoration:'none'}}>
						           	<Tab label = "Sex Health Resources" />
						       	</Link>
							</MenuItem>

							<MenuItem onClick={this.handleClose}>
							    <Link to="/LGBT" style= {{color: 'black',textDecoration:'none' }}>
						       		<Tab label = "LGBT" />
						        </Link>
							</MenuItem>

							<MenuItem onClick={this.handleClose}>
							    <Link to="/ClinicsNearby" style= {{color: 'black',textDecoration:'none' }}>
						           	<Tab label = "Clinics Nearby" />
						       	</Link> 
							</MenuItem>
						</Menu>
						</AppBar>
					</Hidden>
				</div>	


			)
	}
}



export default TopBar;

