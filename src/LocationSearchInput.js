import React, {Component} from 'react';
import styled from 'styled-components';
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import CurrentLocation from './Map';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

const SearchInput = styled.input`
  width: 400px !important;
`;

const Results = styled.div`
  width: 400px !important;
`;
const mapStyles = {
    width: '50%',
    height: '50%'
};

export class LocationSearchInput extends React.Component {
    state = {
        showingInfoWindow: true,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };
    onMarkerClick = (props, marker, e) =>{
        console.log("MARKER CLICK WORKS");
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    };

    onClose = props => {
        console.log("Marker closed")
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    constructor(props) {
        super(props);
        this.state = {address: ''};
    }

    handleChange = address => {
        this.setState({address});
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng);
                this.props.getWeatherData(latLng.lat, latLng.lng);
                this.setState({address: ''});
            })
            .catch(error => console.error('Error', error));
    };

    render() {
        return (
            <div>

                <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                >
                    {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                        <div>
                            <SearchInput
                                {...getInputProps({
                                    placeholder: 'Where are you ...',
                                    className: 'form-control mr-sm-2',
                                })}
                            />
                            <Results className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                        ? {backgroundColor: '#fafafa', cursor: 'pointer'}
                                        : {backgroundColor: '#ffffff', cursor: 'pointer'};
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </Results>
                        </div>
                    )}
                </PlacesAutocomplete>
                <CurrentLocation
                    centerAroundCurrentLocation
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: 43.6532,
                        lng: -79.3832,
                    }}
                >

                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}>

                        <div>
                            <h4>HI</h4>
                        </div>
                    </InfoWindow>
                </CurrentLocation>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCgWEqyR2d9b9zmBZEPhSl_aSYthVyZJxc'
})(LocationSearchInput);
