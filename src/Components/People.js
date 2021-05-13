import axios from 'axios'
import React, { Component } from 'react'

export class People extends Component {
    constructor(){
        super()

        this.state = {
            input: "",
            people: [],
        }
    }

    handleInput = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        // console.log("You click submit!")
        const response = await axios.get(`https://ghibliapi.herokuapp.com/people/${this.state.input}`)
        console.log(response)
    }

    render() {
        return (
            <div>
                <h1>Search for a Person</h1>

                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInput} placeholder="Find Your Person"></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default People
