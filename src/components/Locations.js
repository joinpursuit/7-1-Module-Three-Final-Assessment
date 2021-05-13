import React, { Component } from 'react'
import axios from 'axios'

export default class Locations extends Component {
    constructor(){
        super()
        this.state = {
            locations : [],
            showLocations: false,
        }
    }

    getLocations = async () => {
        const { data } = await axios.get('https://ghibliapi.herokuapp.com/locations')
        console.log(data)
    }

    componentDidMount() {
        this.getLocations()
    }

    handleClick = () => {
        this.setState({
            showLocations : !this.state.showLocations
        })
    }

    render() {
        const {showLocations, locations } = this.state
        return (
            <div>
                <h1>List of Locations</h1>
                <button onClick={this.handleClick}>{showLocations ? "Hide Locations" : "Show Locations"}</button>
                <ul>
                    {showLocations ? locations.find(location => <li>{location.name}</li>) : null}
                </ul>
            </div>
        )
    }
}
