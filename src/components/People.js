import React, { Component } from 'react'
import axios from 'axios'

export default class People extends Component {

    constructor() {
        super()
        this.state = {
            value: '',
            person: {},
            error: false
        }
    }

    handleChange = (e) => {
        const { value } = e.target
        this.setState({
            value
        })
    }
    handleSubmit = async (e) => { // this should iterate through each person in the array, and find the person.name that matches the value
        e.preventDefault()
        const { value } = this.state
        const person = await axios.get(`https://ghibliapi.herokuapp.com/people/pazu`)
        .then(response => response.data)

        console.log(person)
    }
    // displayPerson = () => {
    //     const { person } = this.state
        
    //     return (
    //         <div>
    //             <h2>{person.name}</h2>
    //             <h2>{person.gender}</h2>
    //         </div>
    //     )
    // }


    render() {

        return (
            <div className='People'>
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit} action="">
                    <input onChange={this.handleChange} type="text" placeholder='Find Your Person' />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
