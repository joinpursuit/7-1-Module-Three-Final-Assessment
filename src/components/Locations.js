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

    // grabLocations = async () => {
    //     const { data } =
    // }

    handleClick = () => {
        this.setState({
            displayList: !this.state.displayList,
        })
    }


    render() {
        const { locations, displayList } = this.state;
        return (
            <div>
                <h1>List of Locations</h1>
                <button onClick={this.handleClick}>
                    {displayList ? "Hide Locations" : "Show Locations"}
                </button>
            </div>
        )
    }
}

export default Locations
