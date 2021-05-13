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

    console.log(data);
    const todo = "TODO";
    const newData = (data.find((loc) => loc.climate === todo).climate =
      "Unknown");
    console.log(newData);
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
        Name: {loc.name} <br /> Climate:{loc.climate} <br /> Terrain: {loc.terrain}
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
