import React, { Component } from "react";
import axios from "axios";

export default class Locations extends Component {
  constructor() {
    super();

    this.state = {
      locations: [],
      showLocations: false,
    };
  }

  getLocations = async () => {
    const { data } = await axios.get(
      "https://ghibliapi.herokuapp.com/locations",
    );
    this.setState({
      locations: data,
    });
  };

  handleClick = () => {
    this.setState({
      showLocations: !this.state.showLocations,
    });
  };

  componentDidMount() {
    this.getLocations();
  }

  render() {
    const { locations, showLocations } = this.state;
    const listItems = locations.map((location, i) => (
      <li key={i}>
        Name: {location.name}
        <br />
        Climate: {location.climate}
        <br />
        Terrain: {location.terrain}
      </li>
    ));
    return (
      <div>
        <h1>List of Locations</h1>
        <button onClick={this.handleClick}>
          {showLocations ? "Hide" : "Show"} Locations
        </button>
        <ul className="list">{showLocations && listItems}</ul>
      </div>
    );
  }
}
