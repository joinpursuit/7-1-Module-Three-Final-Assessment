
import React, { Component } from 'react'
import axios from 'axios'
import "./locations.css"
export default class Locations extends Component {
    constructor(){
        super()
        this.state={
            locations: [],
            showLocal: false
        }
    }
     
    getlocations = async()=>{
        const {data} =await axios.get('https://ghibliapi.herokuapp.com/locations/')
        console.log(data)
        this.setState({
            locations: data,
        })
    }
    handlclick=()=>{
        this.setState({
            showLocal: !this.state.showLocal
        })
    }
 
   componentDidMount(){
       this.getlocations()
   }
    render() {
        const {locations, showLocal}= this.state
        const places = locations.map((loc, i )=> 
        <li key={i}> Name: {loc.name} Climate: {loc.climate}  Terrain: {loc.terrain}</li>)
        return (
            <div className="locations">
                <h1>List of Locations</h1>
                <button onClick={this.handlclick}>{showLocal ? 'Hide' : 'Show'} Locations</button>
                
                <ul>{showLocal ? places : null}</ul>
            </div>
        )
    }
}
