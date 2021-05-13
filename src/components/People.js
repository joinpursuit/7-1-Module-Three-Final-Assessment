import React, { Component } from "react";
import axios from "axios";

class People extends Component {
  constructor() {
    super();
    this.state = {
      isError: false,
      searchPeople: "",
      people: {},
      personName: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      searchPeople: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { searchPeople } = this.state;

    try {
      const { data } = await axios.get(
        `https://ghibliapi.herokuapp.com/people/`
      );

      const person = data.find((elem) => elem.name === searchPeople);

      if (person === undefined) {
        this.setState({
          searchPeople: "",
          people: {},
          personName: "",
          isError: true,
        });
      }

      this.setState({
        people: person,
        searchPeople: "",
        personName: person.name,
        isError: false,
      });
    } catch (e) {
      this.setState({
        people: {},
        searchPeople: "",
        personName: "",
        isError: true,
      });
    }
  };

  render() {
    const { searchPeople, people, personName, isError } = this.state;
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
        ) : personName ? (
          <div>
            <h3>Name: {people.name}</h3>
            <p>Age: {people.age}</p>
            <p>Gender: {people.gender}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default People;
