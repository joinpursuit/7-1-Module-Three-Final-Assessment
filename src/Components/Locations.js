import axios from 'axios'
import React, { Component } from 'react'

export class Locations extends Component {
    constructor() {
        super()

        this.state = {
            locations: [],
            show:false,
        }
    }

    handleClick = async () => {
        // console.log("you click the button")
        
        const {data} = await axios.get(`https://ghibliapi.herokuapp.com/locations`)
        // console.log(data)

        this.setState({
            locations: data,
            show: !this.state.show,
        })
    }


    render() {
        const {locations, show} = this.state 
        const locList = locations.map((location,i) => 
        <li key={i}>
            Name:{location.name} <br></br>
            Climate: {location.climate} <br></br>
            Terrain: {location.terrain}
        </li>)
        return (
            <div>
                <h1>List of Locations</h1>
                <button onClick={this.handleClick}>{!show ? "Show Locations" : "Hide Locations"}</button>

                <ul>
                    {show ? locList: null}
                </ul>
            </div>
        )
    }
}

export default Locations
