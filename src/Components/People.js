import React, { Component } from 'react';
import axios from 'axios';

class People extends Component {
    constructor() {
        super()
        this.state = {
            textInput: '',
            people: [],
            currentPerson: [],
        };
    };

    handleChange = (e) => {
        this.setState({ textInput: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { textInput, people} = this.state;
        let selectedPerson

        for(let person of people) {
            if (textInput.toLowerCase() === person.name.toLowerCase()){
                selectedPerson = person
            };
        };
    
        this.setState({ currentPerson: selectedPerson });
    };

    getPeople = async () => {
        const { data } = await axios.get(
            'https://ghibliapi.herokuapp.com/people'
        );
    
        this.setState({ people: data });
    };

    componentDidMount() {
        this.getPeople();
    };

    render() {
        const { textInput, currentPerson } = this.state;
     
        return (
            <div>
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text' 
                        placeholder='Find Your Person'
                        onChange={this.handleChange}
                        value={textInput}
                    ></input>
                    <button>Submit</button>

                    {currentPerson ? (
                        <div>
                            <h2>Name: {currentPerson.name}</h2>
                            <h2>Age: {currentPerson.age}</h2>
                            <h2>Gender: {currentPerson.gender}</h2>
                        </div>
                    ) : (
                        <h2>Not Found</h2>
                    )}
                   
                </form>
            </div>
        );
    };
};

export default People;