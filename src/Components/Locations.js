import React, { Component } from "react";
import APICalls from "./APICalls";

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      showList: false,
    };
  }

  getLocations = () => {
    APICalls.getLocations().then(response => {
        response.data.map((location, i) => {
            this.setState({
                locations : [...this.state.locations, 
                    {
                        name:location.name,
                        climate:location.climate,
                        terrain:location.terrain
                    }
                ]
            })
        })
        
    })

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
    const locationStyle = {
        backgroundColor: "#87CDEA",
        height:"1000px"
    }
    const { locations, showList } = this.state;
    const listItems = locations.map((loc, i) => {
                            return <li key={i}>
                                {loc.name}
                                {loc.climate}
                                {loc.terrain}
                            </li>
                        });

    return (
      <div style={locationStyle}>
        <h1>List of Locations</h1>
        <button onClick={this.handleClick}>
          {showList ? "Hide Locations" : "Show Locations"}
        </button>

        <ul>{showList ? listItems : null}</ul>
      </div>
    );
  }
}

export default Locations;
