import React, { Component } from 'react';
import axios from "axios";

class People extends Component {
    constructor() {
        super();
        this.state = {
            searchPeople: "",
            currentPerson: {},
            personName: "",
            isError: false,
        };
    }

    handleChange = (e) => {
        this.setState ({
            searchPeople: e.target.value,
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { searchPeople } = this.state;

        try {
            const { data } = await axios.get(
                `https://ghibliapi.herokuapp.com/people/${searchPeople}`
            );

            const person = data.find((elem) => elem.name === searchPeople);

            if (person === undefined) {
                this.setState({
                    searchPeople: "",
                    currentPerson: {},
                    personName: "",
                    isError: true,
                })
            }

            this.setState({
                currentPerson: person,
                searchPeople: "",
                personName: person.name,
                isError: false,
            });
        } catch (e) {
            this.setState({
                currentPerson: {},
                searchPeople: "",
                personName: "",
                isError: true,

            });
        };
    };


    render() {
        const { searchPeople, currentPerson, personName, isError} = this.state;
        return (
            <div>
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={searchPeople}
                        type="text"
                        placeholder="Find Your Person"
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
                {isError ? (

                    <h1>Not Found</h1>
                ) : personName ?
                (<div>
                <h3>Name: {currentPerson.name}</h3>
                <p>Age: {currentPerson.Age}</p>
                <p>Gender: {currentPerson.gender}</p>
            </div>) : null
            }
        </div>

        )
    }
}

export default People
