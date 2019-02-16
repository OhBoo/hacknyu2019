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
					<Grid container spacing={8} style={{backgroundColor:'#3eb1cb'}}>

						<Hidden xsDown>
							<Grid item sm = {2} style = {{display: 'flex'}} >
									<Link to  = "/">
										<img src = "https://us.123rf.com/450wm/matsiash/matsiash1507/matsiash150700007/42761668-stock-vector-sign-stylized-silhouette-chicken-logo-design-template.jpg?ver=6" 
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
											<img src = "https://us.123rf.com/450wm/matsiash/matsiash1507/matsiash150700007/42761668-stock-vector-sign-stylized-silhouette-chicken-logo-design-template.jpg?ver=6"
											style = {{
												maxWidth: '3%',
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
							<Typography component = 'h1' variant = 'display1' style = {{color: 'black', fontFamily: 'Ubuntu ', fontWeight: '700', fontSize: '4.5em', marginTop: '4%'}}>
									Tendr
							</Typography>
						</Grid>
				</Grid>
			</div>	
		)
	}
}




export default Header;

