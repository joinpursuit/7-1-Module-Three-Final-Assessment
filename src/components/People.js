import React, { Component } from 'react'
import axios from 'axios'

export default class People extends Component {
    constructor(){
        super()
        this.state ={
            personInput: "",
            personOutput: {},

        }
    }

    handleChange = (e) => {
        this.setState({
            personInput : e.target.value,
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { personInput } = this.state
        
        try {
            const { data } = await axios.get(`https://ghibliapi.herokuapp.com/people/`)

            this.setState({
                personOutput : data,
                personInput: "",
                isError: false,

            })
        } catch (e){
            this.setState({
                personOutput : {},
                personInput: "",
                isError: true,
            })

        }
    }

    render() {
        const {personInput , personOutput, isError } = this.state
        return (
            <div>
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                <input
                value={personInput} 
                onChange={this.handleChange}
                placeholder="Find Your Person">
                </input>
                <button>Submit</button>
                </form>

                {personOutput.name ? (
                    <div>
                    <p>Name: {personOutput.name}</p>
                    <p>Age: {personOutput.age}</p>
                    <p>Gender: {personOutput.gender}</p>
                    </div>
                ) : null}

                {isError ? <h2>Not Found</h2> : null}
            </div>
        )
    }
}
