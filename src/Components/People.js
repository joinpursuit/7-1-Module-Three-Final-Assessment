import React, { Component } from "react";
import axios from "axios";

export default class People extends Component {
  constructor() {
    super();

    this.state = {
      searchPerson: "",
      currentPerson: {},
      currentName: "",
      error: false,
    };
  }

  handleChange = async (event) => {
    this.setState({
      searchPerson: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { searchPerson } = this.state;
    try {
      const { data } = await axios.get(
        "https://ghibliapi.herokuapp.com/people",
      );
      const personName = data.find((person) => person.name === searchPerson);
      if (personName === undefined) {
        this.setState({
          searchPerson: "",
          currentPerson: {},
          currentName: "",
          error: true,
        });
      }
      this.setState({
        searchPerson: "",
        currentPerson: personName,
        currentName: personName.name,
        error: false,
      });
    } catch (e) {
      this.setState({
        searchPerson: "",
        currentPerson: {},
        currentName: "",
        error: true,
      });
    }
  };

  render() {
    const { searchPerson, currentPerson, currentName, error } = this.state;
    return (
      <div>
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={searchPerson}
            type="text"
            placeholder="Find Your Person"
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        {error ? (
          <h1>Not Found</h1>
        ) : currentName ? (
          <div>
            <p>
              <strong>Name:</strong> {currentPerson.name}
            </p>
            <p>
              <strong>Age:</strong> {currentPerson.age}
            </p>
            <p>
              <strong>Gender:</strong> {currentPerson.gender}
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}
