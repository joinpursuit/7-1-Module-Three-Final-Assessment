import axios from 'axios'
import React, { Component } from 'react'

export class People extends Component {
    constructor(){
        super()

        this.state = {
            input: "",
            peopleName: "",
            peopleAge: "",
            peopleGender: "",
            isError: false,
        }
    }

    handleInput = (event) => {
        this.setState({
            input: event.target.value,
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        // console.log("You click submit!")
        const {data} = await axios.get(`https://ghibliapi.herokuapp.com/people/`)
        console.log(data)
        const id = data.filter((id) => id.name ===this.state.input)
        console.log(id)
        this.setState({
            // input: "",
            // peopleName: data.name,
            // peopleAge: data.age,
            // peopleGender: data.gender,
            // isError: false,
        })

    }

    render() {
        const {peopleName, peopleGender, peopleAge} = this.state
        return (
            <div>
                <h1>Search for a Person</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                        onChange={this.handleInput}    
                        placeholder="Find Your Person">
                    </input>
                    <button>Submit</button>
                </form>

                {peopleName ? (
                    <div>
                        <h2>Name: {peopleName}</h2>
                        <h2>Age: {peopleAge}</h2>
                        <h2>Gender: {peopleGender}</h2>
                    </div>
                ) : null}
            </div>
        )
    }
}

export default People;
