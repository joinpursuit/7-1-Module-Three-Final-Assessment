import React, { Component } from 'react'
import axios from "axios";

class Locations extends Component {
    constructor() {
        super();
        this.state = {
            locations: [],
            displayList: false,
        }
    }

    grabLocations = async () => {
        const { data } = await axios.get("https://ghibliapi.herokuapp.com/locations/");

        this.setState ({
            locations: data,
        })
    }

    handleClick = () => {
        this.setState({
            displayList: !this.state.displayList,
        })
    }

    componentDidMount() {
        this.grabLocations();
    }

    render() {
        const { locations, displayList } = this.state;
        const locate = locations.map((location, i) => <li key={i}>Name: {location.name} Climate: {location.climate} Terrain: {location.terrain}</li>)


        return (
            <div className="locations">
                <h1>List of Locations</h1>
                <button onClick={this.handleClick}>
                    {displayList ? "Hide Locations" : "Show Locations"}
                </button>

                <ul>{displayList ? locate : null}</ul>
            </div>
        )
    }
}

export default Locations;
