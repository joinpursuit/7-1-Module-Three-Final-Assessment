import React, { Component } from 'react';
import GhibliAPI from "./GhibliAPI";
import "./People.css";

export default class People extends Component {
    constructor() {
        super();
        this.state = { find: "", people: [], person: { name: "default" } };
    }
    inputChange = (e) => {
        this.setState({ find: e.target.value });
    }
    submitSearch = async (e) => {
        e.preventDefault();
        const { find, people } = this.state;
        const lookingFor = find.trim().toLowerCase();
        const found = people.find(person => person.name.toLowerCase() === lookingFor);
        const person = found || {};
        this.setState({ find: "", person });
    }
    async componentDidMount() {
        const people = await GhibliAPI.getPeople();
        this.setState({ people });
    }

    render() {
        const { find, person } = this.state;
        const personInfo = person.name === "default" ? null : (
            <>
                <h2>name: {person.name}</h2>
                <h3>Age: {person.age}</h3>
                <h3>Gender: {person.gender}</h3>
            </>
        )

        return (
            <div className="people">
                <h1>Search for a Person</h1>
                <form onSubmit={this.submitSearch}>
                    <input
                        type="text"
                        placeholder="Find Your Person"
                        onChange={this.inputChange}
                        value={find}
                    />
                    <button type="submit">Submit</button>
                </form>
                {person.name ? personInfo : <h2>Not Found</h2>}
            </div>
        )
    }
}
