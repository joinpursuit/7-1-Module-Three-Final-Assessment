import axios from "axios";
import React, { Component } from "react";
import "./Locations.css";

export class Locations extends Component {
  constructor() {
    super();
    this.state = {
      showLocations: false,
      failedApiCall: false,
      locations: [],
    };
  }

  componentDidMount = () => {
    this.getLocations();
  };

  getLocations = async () => {
    try {
      const { data } = await axios.get(
        `https://ghibliapi.herokuapp.com/locations`
      );
      this.setState({
        locations: data.map((location) => location.name),
        failedApiCall: false,
      });
    } catch {
      this.setState({
        failedApiCall: true,
      });
    }
  };

  showOrHide = () => {
    this.setState({
      showLocations: !this.state.showLocations,
    });
  };

  render() {
    const { showLocations, locations, failedApiCall } = this.state;
    const locationList = locations.map((location, i) => (
      <li key={i}>{location}</li>
    ));
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={this.showOrHide}>
          {showLocations ? "Hide Locations" : "Show Locations"}
        </button>
        <ul>{showLocations ? locationList : null}</ul>
        {showLocations && failedApiCall ? <h1>Try again</h1> : null}
      </div>
    );
  }
}

export default Locations;
