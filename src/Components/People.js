import axios from 'axios';
import React, { Component } from 'react'

export class People extends Component {
    constructor (){
        super();
        this.state = {
            people: [],
            searchPerson: '',
            personName: '',
            personAge: '',
            personGender: '',
        }
    }
    peopleList = async () => {
        const data = await axios.get("https://ghibliapi.herokuapp.com/people")
        console.log(data.data)
        this.setState({
            people: data.data,
        })
    }
    componentDidMount() {
        this.peopleList();
    }

    handleChange = (e) =>{
        
        this.setState({
            searchPerson: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const personData = this.state.people.filter(person => person.name === this.state.searchPerson);
        console.log(personData)
        if (personData.length === 0) {
            this.setState({
                searchPerson: '',
                personName: '',
                personAge: '',
                personGender: '',
            })
            console.log(this.state.personName)
        }
        else{
            this.setState({
                searchPerson: '',
                personName: personData[0].name,
                personAge: personData[0].age,
                personGender: personData[0].gender,
            })
        }
    }
    render() {
        return (
            <div>
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleChange} value={this.state.searchPerson} placeholder='Find Your Person' />
                    <button>Submit</button>
                </form>
                {this.state.personName ? (
                    <div>
                        <h1>Name: {this.state.personName}</h1>
                        <h1>Age: {this.state.personAge}</h1>
                        <h1>Gender: {this.state.personGender}</h1>
                    </div>
                ) : <h2>Not Found</h2>}
            </div>
        )
    }
}

export default People
