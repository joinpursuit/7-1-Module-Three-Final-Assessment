import React, { Component } from "react";
import axios from "axios";

export class People extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      person: {},
      error: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(
        `https://ghibliapi.herokuapp.com/people/?q=${this.state.input}`
      );

      this.setState({ input: "", person: data[0], error: false });
    } catch (e) {
      this.setState({ input: "", person: {}, error: true });
    }
  };

  handleChange = async (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input, error, person } = this.state;
    return (
      <div>
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={input}
            type="text"
            placeholder="Find Your Person"
          ></input>
          <button>Submit</button>
        </form>
        {error || person === undefined ? (
          <p>Not Found</p>
        ) : (
          <div>
            <p>{person.name}</p>
            <p>{person.age}</p>
            <p>{person.gender}</p>
          </div>
        )}
      </div>
    );
  }
}

export default People;
