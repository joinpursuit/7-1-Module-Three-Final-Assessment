import axios from 'axios'
import React, { Component } from 'react'



export default class Locations extends Component {

    constructor() {
        super()
        this.state = {
            buttonText: 'Show Locations',
            locations: [],
            displayLocations: false
        }
    }
    componentDidMount() {
        this.getLocations()
    }
    getLocations = async () => {
        const response = await axios.get('https://ghibliapi.herokuapp.com/locations')
        .then(response => response.data)
        console.log(response)
        this.setState({
            locations: response
        })
    }
    handleClick = async () => {
        const {buttonText} = this.state

        this.setState({
            displayLocations: !this.state.displayLocations
        })

        // if (buttonText === 'Show Locations') {
        //     this.setState({
        //         buttonText: 'Hide Locations',
        //         displayLocations: !this.state.displayLocations
        //     })
        // }
        // else {
        //     this.setState({
        //         buttonText: 'Show Locations',
        //         // displayLocations: false
        //     })
        // }
    }
    locationList = () => {  // How can I use a function in order to display in render?
        const {locations, displayLocations} = this.state

        const locationList = locations.map((location) => {
            return <li>Name: {location.name} <br />Terrain: {location.terrain === 'TODO' ? location.terrain === 'Unknown' : null}<br />Climate: {location.climate}</li>
        })
        if (displayLocations === true) {
            return locationList
        }
        else {
            return null
        }
    }
    replaceTodo = () => {
        const {locations} = this.state
        const newLocations = [...locations]

        console.log(newLocations)
        newLocations.map((location) => {
            
            if (location.terrain === 'TODO') {  // Why isn't this working?
                return location.terrain === 'Unknown'
            }
            return newLocations
        })
        console.log(newLocations)
    }

    render() {
        const {buttonText, locations, displayLocations} = this.state
        const locationList = locations.map((location) => {
            return <li>{location.name} : {location.terrain} : {location.climate}</li>
        })
        this.replaceTodo()

        return (
            <div className='Locations'>
                <h1>List of Locations</h1>
                <button onClick={this.handleClick}>{displayLocations ? 'Hide Locations' : 'Show Locations'}</button>
                <ul>
                    {/* {displayLocations ? locationList : null} */}
                    {this.locationList()}
                    {/* {locations.map((location) => {
            return <li>{location.name} : {location.terrain === 'TODO' ? location.terrain.concat() : null} : {location.climate}</li> 
            // why isn't this working^^
        })} */}
                </ul>
            </div>
        )
    }
}
