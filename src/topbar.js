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
			<div id="topNav">
				<Hidden xsDown>
					<AppBar position="static" style = {{backgroundColor: 'black', flexGrow: 1, display: "flex", textAlign: "center"}} >
						<Tabs>
							<Grid container spacing={48} >
								<Grid item lg={24} >
								    <Link to="/Articles" style= {{color: 'white', fontFamily: 'Ubuntu', textDecoration:'none'}}>
					            		<Tab label = "Articles" value={0} />
					            	</Link>	

								    <Link to="/Resources" style= {{color: 'white',fontFamily: 'Ubuntu', fontweight:'500', textDecoration:'none'}}>
					            		<Tab label = "Resources" value={0} />
					            	</Link>

					            	<Link to="/Forum" style= {{color: 'white',fontFamily: 'Ubuntu',textDecoration:'none' }}>
					            		<Tab label = "Forum" value={0} />
					            	</Link> 
					            </Grid>
							</Grid>
						</Tabs>
					</AppBar>
				</Hidden>	            		

				<Hidden smUp>
					<AppBar position="static" style = {{backgroundColor: 'black', marginBottom: 20, marginTop: 25, flexGrow: 1, display: "flex"}} >
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
							    <Link to="/Articles" style= {{color: 'black',textDecoration:'none'}}>
						           	<Tab label = "Articles" />
						        </Link>	
							</MenuItem>

							<MenuItem onClick={this.handleClose}>
							    <Link to="/Resources" style= {{color: 'black',textDecoration:'none'}}>
						           	<Tab label = "Resources" />
						       	</Link>
							</MenuItem>

							<MenuItem onClick={this.handleClose}>
							    <Link to="/Forum" style= {{color: 'black',textDecoration:'none' }}>
						       		<Tab label = "Forum" />
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

