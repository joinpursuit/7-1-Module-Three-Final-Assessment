import React, { Component } from "react";
import axios from "axios";

export class Locations extends Component {
  constructor() {
    super();
    this.state = {
      buttonText: "Show Locations",
      locations: [],
    };
  }

  handleClick = async () => {
    let { data } = await axios.get("https://ghibliapi.herokuapp.com/locations");
    data.forEach((elem) => {
      if (elem.climate === "TODO") {
        elem.climate = "Unknown";
      }
      if (elem.terrain === "TODO") {
        elem.terrain = "Unknown";
      }
    });
    if (this.state.buttonText === "Show Locations") {
      this.setState({
        locations: data,
        buttonText: "Hide Locations",
      });
    } else {
      this.setState({
        locations: [],
        buttonText: "Show Locations",
      });
    }
  };
  render() {
    const { buttonText, locations } = this.state;
    const renderLocations = () => {
      return locations.map((elem, i) => {
        return (
          <li key={i}>
            <div>Name: {elem.name}</div>
            <div>Climate: {elem.climate}</div>
            <div>Terrain: {elem.terrain}</div>
          </li>
        );
      });
    };
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={this.handleClick}>{buttonText}</button>
        <ul className="ul">{renderLocations()}</ul>
      </div>
    );
  }
}

export default Locations;
