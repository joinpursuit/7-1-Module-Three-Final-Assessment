import axios from 'axios';
import { Component } from 'react';

class Locations extends Component {
    state = {
        locations: [],
        showLocations: false
    }

    getLocations = async () => {
        try {
            const { data } = await axios.get(
                'https://ghibliapi.herokuapp.com/locations'
            )
            console.log(data)
            this.setState({
                locations: data,
                showLocations: !this.state.showLocations
            })

        }
        catch (error) {
            this.setState({
                locations: [],
                showLocations: false
            })
        }
    }


    render() {
        const { locations, showLocations } = this.state
        const locationList = locations.map(location => {
            return (
                <li key={location.id}>
                    Name: {location.name} <br />
                    Climate: {location.climate}<br />
                    Terrain: {location.terrain}
                </li>
            )
        })
        return (
            <div>
                <h1>List of Locations</h1>
                <button onClick={this.getLocations}>{showLocations ? 'Hide Locations' : 'Show Locations'}</button>
                <ul>
                    {showLocations ? locationList : null}
                </ul>
            </div>
        )
    }
}

export default Locations;