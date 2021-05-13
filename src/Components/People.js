import React, { Component } from "react";
import axios from "axios";

export class People extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      input: "",
      people: [],
      selectedname: "",
      selectedAge: "",
      selectedGender: "",
    };
  }

  componentDidMount() {
    this.getPeople();
  }

  getInput = (e) => {
    const { value } = e.target;
    this.setState({ input: value });
  };

  getPeople = async () => {
    try {
      const { data } = await axios.get(
        "https://ghibliapi.herokuapp.com/people"
      );
      console.log(data)
      this.setState({
        people: data,
      });
    } catch {
      console.log("error");
    }
  };

  findPerson = async (e) => {
    e.preventDefault();
    const { people, input } = this.state;
    const person = people.filter(person => person.name === input);

    console.log(people)
    console.log(person)
    if (person[0]) {
      this.setState({
        selectedname: person[0].name,
        selectedAge: person[0].age,
        selectedGender: person[0].gender,
        input: "",
        error: false,
      });
    } else {
      this.setState({
        error: true,
        input: "",
        selectedname: "",
        selectedAge: "",
        selectedGender: "",
      });
    }
  };

  render() {
    const { error, selectedAge, selectedGender, selectedname } = this.state;
    return (
      <div>
        <h1>Search for a Person</h1>
        <form onSubmit={this.findPerson}>
          <input
            type="text"
            placeholder="Find Your Person"
            onChange={this.getInput}
          ></input>
          <button type="submit">Submit</button>
        </form>
        {error ? (
          <h2>Not Found</h2>
        ) : selectedname ? (
          <>
            <h1>Name: {selectedname}</h1>
            <h2>Age: {selectedAge}</h2>
            <h2>Gender: {selectedGender}</h2>
          </>
        ) : null}

      </div>
    );
  }
}

export default People;
