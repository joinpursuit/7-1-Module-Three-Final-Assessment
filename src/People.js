import React, { Component } from "react";
import axios from "axios";

export default class People extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      info: {},
      error: false,
      input: "",
      age: "",
      name: "",
      gender: "",
    };
  }

  componentDidMount() {
    this.people();
  }

  getInfo = (e) => {
    const { value } = e.target;
    this.setState({
      input: value,
    });
  };

  people = async () => {
    try {
      const { data } = await axios.get(`https://ghibliapi.herokuapp.com/people/`);
      this.setState({
        people: data,
      });
    } catch {
      this.setState({
        error: true,
      });
    }
  };

  getPeople = async (e) => {
    e.preventDefault();
    const { people, input } = this.state;
    const person = people.filter((person) => person.name === input);

    if (person[0]) {
      this.setState({
        name: person[0].name,
        age: person[0].age,
        gender: person[0].gender,
        input: "",
        error: false,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    const { age, name, gender, error } = this.state;
    return (
      <div>
        <h1>Search for a Person</h1>
        <form onSubmit={this.getPeople}>
          <input type="text" onChange={this.getInfo} placeholder="Find Your Person" />
          <button type="submit">Submit</button>
        </form>
        {error ? (
          <h2>Not Found</h2>
        ) : (
          <>
            <h1>
              Name: {name}
              <br />
              Age: {age}
              <br />
              Gender: {gender}
            </h1>
          </>
        )}
      </div>
    );
  }
}
