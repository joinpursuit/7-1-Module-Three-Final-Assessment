import React, { Component } from 'react';
import GhibliAPI from "./GhibliAPI";
import "./Locations.css";

export default class Locations extends Component {
    constructor() {
        super();
        this.state = { locationList: [], showList: false };
    }
    buttonClick = () => {
        this.setState({ showList: !this.state.showList });
    }
    async componentDidMount() {
        const locationList = await GhibliAPI.getLocations();
        this.setState({ locationList });
    }
    render() {
        const { locationList, showList } = this.state;
        const uList = locationList.map(loc => (
            <li key={loc.id}>
                <h3>Name: {loc.name}</h3>
                <h3>Climate: {loc.climate}</h3>
                <h3>Terrain: {loc.terrain}</h3>
            </li>
        ));
        return (
            <div className="locations">
                <h1>List of Locations</h1>
                <button onClick={this.buttonClick}>{showList ? "Hide" : "Show"} Locations</button>
                <ul className="city-list">
                    {showList ? uList : null}
                </ul>
            </div>
        )
    }
}
