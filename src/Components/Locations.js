import React, { Component } from "react";
import axios from "axios";

export default class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      showList: false,
    };
  }

  getLocations = async () => {
    const { data } = await axios.get(
      "https://ghibliapi.herokuapp.com/locations"
    );
    this.setState({
      locations: data,
    });
  };
  handleClick = () => {
    this.setState({
      showList: !this.state.showList,
    });
  };

  componentDidMount() {
    this.getLocations();
  }
  render() {
    const { locations, showList } = this.state;
    const listItems = locations.map((loc, i) => (
      <li key={i}>
        Name: {loc.name}
        Climate:{loc.climate}
        Terrain: {loc.terrain}
      </li>
    ));
    return (
      <div>
        <h1>List of Locations</h1>
        <button onClick={this.handleClick}>
          {showList ? "Hide Locations" : "Show Locations"}
        </button>
        <ul>{showList ? listItems : null}</ul>
      </div>
    );
  }
}
