import React, { Component } from 'react'

export default class People extends Component {
    
    render() {
        return (
            <div>
                <h1>Search for a Person</h1>
                <input type="text" />
                <button>Submit</button>
                <div>Name:</div>
                <div>Age:</div>
                <div>Gender:</div>
            </div>
        )
    }
}
