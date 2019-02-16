import React from 'react';
import { Link } from 'react-router-dom';
import parallax from 'react-parallax';

class GoogleMap extends React.Component{

	render()
	{
		return(
			<div>
				<center style = {{
                        maxWidth: '70%',
                        verticalAlign: 'middle',
                        justifyContent: 'space-evenly',
                        display: 'block',
                        marginTop: '100',
                        marginBottom: 'auto'
                        }}>
				<iframe width="600" height="400" frameborder="100" src="https://www.google.com/maps/embed/v1/search?q=Sexual%20health%20clinics&key=AIzaSyDW5rouU0kXpCN1XgKuBlq1-2kMbMa9_oA" allowfullscreen> </iframe>
				</center>
			</div>
		)
	}
}

export default GoogleMap; 