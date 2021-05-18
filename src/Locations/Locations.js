import React, { Component } from "react";
import axios from "axios";

export class Locations extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true,
      list: [],
    };
  }

  handleClick = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  getLocations = async () => {
    const { data } = await axios.get(
      `https://ghibliapi.herokuapp.com/locations/`
    );
    this.setState({ list: data.map((location) => location.name) });
  };

  componentDidMount() {
    this.getLocations();
  }

  render() {
    const { list } = this.state;
    const ul = list.map((location, i) => {
      return <li key={i}>{location}</li>;
    });

    return (
      <div>
        <h1>List of Locations</h1>
        <button onClick={this.handleClick}>
          {" "}
          {this.state.hidden ? "Show Locations" : "Hide Locations"}{" "}
        </button>
        <ul>{this.state.hidden ? null : ul}</ul>
      </div>
    );
  }
}

export default Locations;
