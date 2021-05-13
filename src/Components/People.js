import React, { Component } from 'react'
import axios from "axios"

export default class People extends Component {
    constructor() {
        super()
        this.state = {
            searchCharacter: "",
            currentMovie: {},
            isError: false,
        }
    }

    handleChange = (e) => {
        this.setState({searchCharacter: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { searchCharacter } = this.state
        console.log(searchCharacter)
        
        try {
            const { data } = await axios.get(`https://ghibliapi.herokuapp.com/people`)
            this.setState({currentMovie: data, searchCharacter: "", isError: false})
            // console.log(currentMovie)
        } catch (e) {
            this.setState({
                searchCharacter: "",
                currentMovie: this.data,
                isError: true
            })
        }
    }

    render() {
        const { searchCharacter, currentMovie, isError } = this.state
        return (
            <div>
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                <input value={searchCharacter} onChange={this.handleChange} type="text" placeholder="Find Your Person"/>
                <button >Submit</button>
                {isError ? <h2>Not Found</h2> : null}
                </form>
                
            </div>
        )
    }
}
