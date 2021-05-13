import React, { Component } from 'react'
import axios from 'axios'

export class People extends Component {
constructor() {
    super();
    this.state = {
        searchPerson: "",
        currPerson: {},
        currName: '',
        isError: false,
    }
}

handleChange = (e) => {
    this.setState({
        searchPerson: e.target.value,
    })
}

handleSubmit= async (e) => {
    e.preventDefault();
    const { searchPerson } = this.state

    try {
        const { data } = await axios.get(
          `https://ghibliapi.herokuapp.com/people`
        );
            const person = data.find((ele) => ele.name === searchPerson)
        this.setState({
          currPerson: person,
          currName: person.name,
          searchPerson: "",
          isError: false,
        });
      } catch (e) {
        this.setState({
          currPerson: {},
          currName:"",
          searchPerson: "",
          isError: true,
        });
      }
    };

    render() {
        const { searchPerson, currPerson, currName, isError } = this.state
        return (
            <div>
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    value={searchPerson}
                    onChange={this.handleChange} 
                    type="text"
                     placeholder="Find Your Person"
                     />
                    <button>Submit</button>
                </form>
                {currName ? (
            <div>
                <p>Name: {currPerson.name}</p>
                <p>Age: {currPerson.age}</p>            
                <p>Gender: {currPerson.gender}</p>
          </div>
        ) : null}

        {isError ? <h2>Not Found!</h2> : null}
            </div>
        )
    }
}

export default People
