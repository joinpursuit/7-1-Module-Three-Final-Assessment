import axios from "axios";
import React, { Component } from "react";

export default class People extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      people: [],
      person: {},
      notFound: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { input, people } = this.state;
    people.forEach((person) => {
      if (person.name === input) {
        console.log(person);
        this.setState({person})
      } else{
          console.log("dub")
          this.setState({notFound:true})
      }
    });
  };
  getPeople = async () => {
    const { data } = await axios.get(`https://ghibliapi.herokuapp.com/people`);
    this.setState({
      people: data.map(
        (per) =>
          (per = {
            name: per.name,
            age: per.age,
            gender: per.gender,
            id: per.id,
          })
      ),
    });
  };
  componentDidMount() {
    this.getPeople();
  }
  render() {
    const { input, people, person,notFound } = this.state;
    // console.log(people)
    return (
      <div>
        <h1 style={{ color: "ivory" }}>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Find Your Person"
            // value={input}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        {notFound? <h2>Not Found</h2>: null}
        <h3 style={{ color: "ivory" }}>Name: {person.name}</h3>
        <h3 style={{ color: "ivory" }}>Age: {person.age}</h3>
        <h3 style={{ color: "ivory" }}>Gender: {person.gender}</h3>
      </div>
    );
  }
}
