import React, { Component } from 'react'
import axios from 'axios'

export default class People extends Component {

    constructor() {
        super()
        this.state = {
            value: '', 
            people: [],
            person: {},
            display: false,
            error: false
        }
    }
    async componentDidMount() {
        const people = await axios.get('https://ghibliapi.herokuapp.com/people')
        .then(people => people.data)
        console.log(people)
        this.setState({
            people
        })    
    }
    handleInput = (e) => {
        const {value} = e.target

        this.setState({
            value
        })
    }
    handleSubmit = (e) => { // If person is found in this.state.people, toggle the state.display false and state.error true
        e.preventDefault()
        
        const { value, people } = this.state
        const person = people.find(person => person.name.toUpperCase() === value.toUpperCase())

        this.setState({
            person,
            value: '',
            display: true
        })
        e.target.reset()
    }
    handleDisplay = () => {
        const { person, display } = this.state
        if (display === true) {
            return(
                <div>
                    <h3>Name: {!person === undefined ? person.name : null}</h3>
                    {/* Why won't this work? ^^ */}
                    {/* <h3>Name: {'name' in person || person.hasOwnProperty('name') ? person.name : null}</h3> */}
                    {/* This doesn't work either! ^^ */}
                    <p>Age: {!person === undefined ? person.age : null}</p>
                    <p>Gender: {!person === undefined ? person.gender : null}</p>
                </div>
            )
        }
        else {
            return null
        }
    }
    handleDisplayError = () => {
        const { error } = this.state
        if (error) {
            return <h2>Not Found</h2>
        }
    }
// In order to get an error to show up, we have to change display to false and error to true. We need a function that toggles 
// error and display on and off

    render() {
        const { value, people, person } = this.state
        
        return (
            <div>
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit} action="">
                    <input 
                        onChange={this.handleInput}
                        type="text" 
                        name="" 
                        id="" 
                        placeholder='Find Your Person' 
                    />
                    <button type="submit">Submit</button>
                </form>
                {this.handleDisplay()}
                {this.handleDisplayError()}

            </div>
        )
    }
}
