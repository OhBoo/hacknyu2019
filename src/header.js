import React from 'react';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const style = {
		backgroundColor: '',
	}

const colors = {
  white: '#fff',
  black: '#000',
}

class Header extends React.Component{

	render()
	{
		return(

			<div id = "pageTop" style = {style}>	
					<Grid container spacing={8}>

						<Hidden xsDown>
							<Grid item sm = {2} style = {{display: 'flex'}} >
								<center >
									<Link to  = "/">
										<img src = "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1002614_496276807149247_1139499627_n.jpg?_nc_cat=0&oh=8877a9b5cee02e567f64299bb95c3418&oe=5C06F471" 
										style = {{
											maxWidth: '70%',
											verticalAlign: 'middle',
											justifyContent: 'center',
											display: 'block',
											marginTop: 'auto',
											marginBottom: 'auto'
										}}
										/>
									</Link>
								</center>
							</Grid>
						</Hidden>
						<Hidden smUp>
							<Grid container spacing = {12}>
								<Grid item xs={3}>
									&nbsp;
								</Grid>
								<Grid item xs={6}>

									<center>
										<Link to  = "/">
											<img src = "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1002614_496276807149247_1139499627_n.jpg?_nc_cat=0&oh=8877a9b5cee02e567f64299bb95c3418&oe=5C06F471" 
											style = {{
												maxWidth: '70%',
												verticalAlign: 'middle',
												marginTop: 15
											}}
											/>
										</Link>
									</center>
								</Grid>
							</Grid>
						</Hidden>

						<Grid item sm = {7}>
							<Typography component = 'h1' variant = 'display1' style = {{color: 'black', fontFamily: 'Neue Haas Grotesk W01 Disp,Arial,sans-serif', fontWeight: 'bold', marginTop: 40}}>
								<center>
									Tendr
								</center>
							</Typography>
						</Grid>
				</Grid>
			</div>	
		)
	}
}




export default Header;

