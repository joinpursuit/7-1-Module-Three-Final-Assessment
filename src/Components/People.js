import axios from 'axios'
import React, { Component } from 'react'

export class People extends Component {
    constructor(){
        super()

        this.state = {
            input: "",
            people: [],
            name: "",
            age: "",
            gender: "",
            isError: false,
        }
    }

    componentDidMount () {
        this.getPeople()
    }

    getPeople = async () => {
        const {data} = await axios.get(`https://ghibliapi.herokuapp.com/people`)
        // console.log(data)

        this.setState ({
            people: data,
        })
    }

    handleInput = (event) => {
        this.setState({
            input: event.target.value,
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const {input,people} = this.state
        const person = people.filter((p) => p.name === input)
        // console.log(person[0])

        if(person[0]) {
            this.setState({
                name: person[0].name,
                age: person[0].age,
                gender: person[0].gender,
                isError: false,
            })
        } else {
            this.setState ({
                name: "",
                age: "",
                gender: "",
                isError: !this.state.isError,
            })
        }
    }

    render() {
        const {people, input, name, age, gender, isError} = this.state
    
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

                {name ? (
                <div>
                    <h2>Name: {name}</h2>
                    <h2>Age: {age}</h2>
                    <h2>Gender: {gender}</h2>
                </div>)
                : null }

                {isError ? <p>Not Found</p>: null}

            </div>
        )
    }
}

export default People;
