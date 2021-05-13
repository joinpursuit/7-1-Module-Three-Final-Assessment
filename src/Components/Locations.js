import React, { Component } from 'react';
import axios from 'axios';

class Locations extends Component {
    constructor() {
        super()
        this.state = {
            locations: [],
            toggle: false,
        };
    };

    handleClick = () => {
        this.setState({ toggle: !this.state.toggle});
    };

    getLocations = async () => {
        const { data } = await axios.get(
            'https://ghibliapi.herokuapp.com/locations'
        );
            
        this.setState({ locations: data });
    };

    componentDidMount() {
        this.getLocations();
    };

    render() {
        const { locations, toggle } = this.state;
        const list = locations.map((location, i) =>
            <div>
                <li key={i}>
                    Name: {location.name} <br />
                    Climate: {location.climate} <br />
                    Terrain: {location.terrain}
                </li>
            </div>
        );

        return (
            <div>
                <h1>List of Locations</h1>
                <button onClick={this.handleClick}>
                    {!toggle ? 'Show Locations' : 'Hide Locations'}
                </button>
                <ul>
                    {toggle ? list : null}
                </ul>
            </div>
        );
    };
};

export default Locations;