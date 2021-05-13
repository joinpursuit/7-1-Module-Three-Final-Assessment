import React, { Component } from "react";
import axios from "axios";

export class People extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      people: [],
      person: [],
      error: "",
      show: false,
    };
  }

  componentDidMount() {
    this.getPeople();
  }

  getPeople = async () => {
    let { data } = await axios.get("https://ghibliapi.herokuapp.com/people");
    this.setState({
      people: data,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let person = this.state.people.find(
      (elem) => elem.name === this.state.input
    );
    if (person) {
      this.setState({
        person: person,
        input: "",
        error: "",
        show: true,
      });
    } else {
      this.setState({
        error: "Not Found",
        input: "",
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    const { input, person, error, show } = this.state;
    const renderPerson = (person) => {
      return (
        <div className="person">
          <h4>Name: {person.name}</h4>
          <h4>Age: {person.age}</h4>
          <h4>Gender: {person.gender}</h4>
        </div>
      );
    };
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            placeholder="Find Your Person"
            type="text"
            name=""
            id=""
            value={input}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>{error}</h4>
        {show ? renderPerson(person) : ""}
      </div>
    );
  }
}

export default People;
