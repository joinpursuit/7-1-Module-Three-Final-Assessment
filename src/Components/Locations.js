import axios from "axios";
import React, { Component } from "react";

export default class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      isShown: false,
    };
  }
  handleClick =()=>{
      this.setState({
       isShown: !this.state.isShown,
      })
  }
  getLocations = async () => {
    const { data } = await axios.get(
      `https://ghibliapi.herokuapp.com/locations`
    );
    this.setState({
      locations: data.map(
        (loc) =>
          (loc = { name: loc.name, climate: loc.climate, terrain: loc.terrain })
      ),
    });
  };
  componentDidMount() {
    this.getLocations();
  }
  render() {
    const { isShown, locations } = this.state;
    const listItems = locations.map((loc, i) => (
      <li style={{ color: "ivory" }} key={i}>
        <h3 style={{}}>Name: {loc.name}</h3>
        <p>Climate: {loc.climate}</p>
        <p>Terrain: {loc.terrain}</p>
      </li>
    ));
    return (
      <div>
        <h1 style={{ color: "ivory" }}> List of Locations </h1>
        <button onClick={this.handleClick}>{isShown ? "Hide Locations" : "Show Locations"}</button>

        <ul style={{display: "flex", flexDirection:"column",listStyleType:"none"}}>{isShown ? listItems : null}</ul>
      </div>
    );
  }
}
