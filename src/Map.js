import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import Hospital from './assets/hospital.png';

const mapStyles = {
    map: {
        position: 'absolute',
        width: '50%',
        height: '50%'
    }
};
const Results = styled.div`
  width: 400px !important;
`;
const SearchInput = styled.input`
  margin-left: 155px;
  margin-bottom: 25px;
  width: 400px !important;
  height: 25px;
`;


export class CurrentLocation extends React.Component {

    constructor(props) {
        super(props);

        const {lat, lng} = this.props.initialCenter;
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng,
                address: '',
            }
        };
    }

    handleChange = address => {
        this.setState({address});
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng);
                this.getSearchData(latLng.lat, latLng.lng);
                this.setState({
                    currentLocation: {
                        lat: latLng.lat,
                        lng: latLng.lng
                    }
                });


                // this.state.searchData.forEach(function(element) {
                //     console.log(element);
                // });
            })
            .catch(error => console.error('Error', error));

    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
            this.recenterMap();
        }
    }

    recenterMap() {
        const map = this.map;
        const current = this.state.currentLocation;

        const google = this.props.google;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(current.lat, current.lng);
            map.panTo(center);
        }
    }

    componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    const coords = pos.coords;
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude,
                        },
                        searchData: [],
                    }, () => {
                        this.getSearchData(coords.latitude, coords.longitude);
                    });
                });
            }
        }
        this.loadMap();
    }

    loadMap() {
        if (this.props && this.props.google) {
            // checks if google is available
            const {google} = this.props;
            const maps = google.maps;
            const mapRef = this.refs.map;

            // reference to the actual DOM element
            const node = ReactDOM.findDOMNode(mapRef);
            let {zoom} = this.props;
            const {lat, lng} = this.state.currentLocation;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign(
                {},
                {
                    center: center,
                    zoom: zoom
                }
            );

            // maps.Map() is constructor that instantiates the map
            this.map = new maps.Map(node, mapConfig);
        }
    }

    loadNewMapWithMarkers() {
        if (this.props && this.props.google) {
            // checks if google is available
            const {google} = this.props;
            const maps = google.maps;
            const mapRef = this.refs.map;

            // reference to the actual DOM element
            const node = ReactDOM.findDOMNode(mapRef);
            let {zoom} = this.props;
            const {lat, lng} = this.state.currentLocation;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign(
                {},
                {
                    center: center,
                    zoom: zoom
                }
            );

            // maps.Map() is constructor that instantiates the map
            this.map = new maps.Map(node, mapConfig);
            for (let i = 0; i < this.state.searchData.length; i++) {
                let marker = new google.maps.Marker({
                    position: this.state.searchData[i].geometry.location,
                    name: this.state.searchData[i].name,
                    icon: Hospital,
                });
                marker.setMap(this.map);
            }
            let marker = new google.maps.Marker({
                position: this.state.currentLocation,
                name: "Your location",
            });
            marker.setMap(this.map);
        }
    }

    getSearchData = (lat, lng) => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=3000&type=hospital&keyword=planned&key=AIzaSyCgWEqyR2d9b9zmBZEPhSl_aSYthVyZJxc`)
            .then(response => {
                    this.setState({
                        searchData: response.data.results,
                        loading: false
                    }, () => {
                        this.loadNewMapWithMarkers();
                    });
                    console.log(this.state.searchData);
                    console.log("TODOROKIII");

                }
            );
    };

    renderChildren() {
        const {children} = this.props;

        if (!children) return;

        return React.Children.map(children, c => {
            if (!c) return;
            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
                mapCenter: this.state.currentLocation
            });
        });
    }

    render() {
        const style = Object.assign({}, mapStyles.map);
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
                                    placeholder: 'Find a clinic in ...',
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


                <div style={style} ref="map">
                    Loading map...
                </div>
                {this.renderChildren()}
            </div>
        );
    }
}

export default CurrentLocation;

CurrentLocation.defaultProps = {
    zoom: 14,
    initialCenter: {
        lng: 43.6532,
        lat: -79.3832,
    },
    centerAroundCurrentLocation: false,
    visible: true
};

