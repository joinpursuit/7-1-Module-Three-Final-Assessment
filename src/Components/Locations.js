import React, { Component } from 'react'
import axios from 'axios'

export default class Locations extends Component {
    constructor(){
        super()
        this.state = {
            locations: [],
            showList: false,
        }
    }
    getLocations = async () => {
        const data = await axios.get("https://ghibliapi.herokuapp.com/locations")
        console.log(data.data)
        this.setState({
            locations: data.data.map((location) => location.name)
        })
    }
    componentDidMount() {
        this.getLocations();
    }
    handleClick = () => {
        this.setState({
            showList: (!this.state.showList),
        })
    }
    render() {
        const listItems = this.state.locations.map((location, i) => <li key={i}>{location}</li>) 
        return (
            <div>
                <h1>List of Locations</h1>
                <button onClick={this.handleClick}>{this.state.showList ? "Hide Locations" : "Show Locations"}</button>
                <ul>{this.state.showList ? listItems : ""}</ul>
            </div>
        )
    }
}
