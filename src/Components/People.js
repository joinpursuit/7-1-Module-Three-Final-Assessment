import React, { Component } from "react";
import axios from "axios";

class People extends Component {
  constructor() {
    super();
    this.state = {
      searchPerson: "",
      currentPerson: {},
      personName: "",
      isError: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      searchPerson: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { searchPerson } = this.state;
    try {
      const { data } = await axios.get("https://ghibliapi.herokuapp.com/people");
      const personName = data.find((person) => person.name === searchPerson);
      if(personName === undefined) {
        this.setState({
          searchPerson: "",
          currentPerson: {},
          personName: "",
          error: true,
        });
      }
      this.setState({
        searchPerson: "",
        currentPerson: personName,
        personName: personName.name,
        error: false,
      });
    } catch (e) {
      this.setState({
        searchPerson: "",
        currentPerson: {},
        persontName: "",
        error: true,
      });
    }
    
  };

  render() {
    const { searchPerson, currentPerson, personName, isError } = this.state;
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

        {isError ? (
          <h1>Not Found</h1>
        ) : personName ? (
          <div>
            <p> Name: {currentPerson.name}</p>
            <p>Age: {currentPerson.age}</p>
            <p>Gender: {currentPerson.gender}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default People;