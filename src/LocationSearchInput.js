import React, {Component} from 'react';
import styled from 'styled-components';
import { GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import { SearchBox } from '@loadup/react-google-places-autocomplete';
import CurrentLocation from './Map';


const LocationContainer = styled.div`
    margin-top: 10%;
    margin-left:50%;
    margin-right:50%;
`;
const mapStyles = {
    width: '100%',
    height: '100%'
};

export class LocationSearchInput extends Component {
    state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
    };


    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {

        return (
            <LocationContainer>
                <SearchBox
                    width="400"
                    id="hospital"
                    onPlaceChanged={({ original, parsed }) => {
                        console.log(original);
                        console.log(parsed);
                        // Do whatever you want
                        // original is an array of Google Maps PlaceResult Object
                        // parsed is an array of parsed address components
                    }}
                />
                <CurrentLocation
                    centerAroundCurrentLocation
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={ {
                        lat: 43.6532,
                        lng: -79.3832,
                    }}
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'Your location'}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>

                </CurrentLocation>

            </LocationContainer>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCgWEqyR2d9b9zmBZEPhSl_aSYthVyZJxc'
})(LocationSearchInput);
