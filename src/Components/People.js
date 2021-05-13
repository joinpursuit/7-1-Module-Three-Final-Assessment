import axios from 'axios'
import React, { Component } from 'react'

export class People extends Component {
    constructor(){
        super()

        this.state = {
            input: "",
            people: [],
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

        try {
            const {data} = await axios.get(`https://ghibliapi.herokuapp.com/people`)
            console.log(data)
            this.setState ({
                people: data,
                isError: false,
            })
        } catch (error) {
            this.setState({
                isError: true,
            })
        }
    }

    render() {
        const {people, input, isError} = this.state
        const person = people.map((p,i) => 
        <div key={i} value={p.id}>
            Name: {p.name} <br></br>
            Age: {p.age} <br></br>
            Gender: {p.gender}
        </div>)

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

                {person ? person :null }
                {isError ? <p>Not Found</p>: null}
                {/* <div>
                    {input ? {person} : null}
                </div> */}
                {/* <div>
                    {person === input ? person : <p>Not Found</p>}
                </div> */}
                

            </div>
        )
    }
}

export default People;
