import React, { Component } from 'react';
import axios from "axios";

export default class Locations extends Component {
    constructor(){
        super()
        this.state = {
            locationList: [],
            displayList: false,
        }
    }

    getLocations = async () => {
        const { data } = await axios.get("https://ghibliapi.herokuapp.com/locations")
        console.log(data)
        this.setState({locationList: data.map((location) =>{
            return location 
        })
        })
    }
    

    handleClick () {
        this.setState({displayList: !this.state.displayList})
    }

    componentDidMount() {
        this.getLocations();
    }

    render() {
        const { locationList, displayList } = this.state
        const listItems = locationList.map((location, i) => {
            return(
                <div>
                    <li key={i}>Name: {location.name}</li>
                    <li key={i}>Terrain: {location.terrain}</li>
                    <li key={i}>Climate: {location.climate}</li>
                </div>
            )
        })
        return (
            <div>
                <h1>List of Locations</h1>
                <button onClick={this.handleClick}>{displayList ? "Hide Locations" : "Show Locations"}</button>
                <ul>{displayList ? listItems : null}</ul>
            </div>
        )
    }
}
