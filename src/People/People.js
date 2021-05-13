import React, { Component } from 'react'
import axios from "axios"

export class People extends Component {
    constructor(){
        super()

        this.state = {
            input: "",
            person: {},
            error: false
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await axios.get(`https://ghibliapi.herokuapp.com/people/${this.state.input}`)
            this.setState({ input: "", person: data, error: false })
        } catch (e) {
            this.setState({ input: "", person: {}, error: true })
        }

    }

    handleChange = async (e) => {
        this.setState({ input: e.target.value})
    }


    render() {
        const { input, error } = this.state
        return (
            <div>
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={input} type="text" placeholder="Find Your Person"></input>
                    <button>Submit</button>
                </form>
                
                {error ? <p>Not Found</p> : null}
            </div>
        )
    }
}

export default People
