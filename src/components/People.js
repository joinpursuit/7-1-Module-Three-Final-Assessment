import React, { Component } from "react";
import axios from "axios";

export default class People extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      input: "",
      name: "",
      age: "",
      gender: "",
      errPing: "",
    };
  }
  handleInputChange = (e) => {
    // e.preventDefault();
    this.setState({
      input: e.target.value,
    });
    console.log(this.state.input);
  };
  
  handleClick = async () => {
    try {
      const { data } = await axios.get(
        `https://ghibliapi.herokuapp.com/people`
      );
      const uuid = data.find(
        (person) => person.name === this.state.input
      );
        this.setState({
            name: uuid.name,
            age: uuid.age,
            gender: uuid.gender
        })
    } catch (e) {
      console.error(e);
      
      this.setState({
        name: "",
        age: "",
        gender: "",
        errPing: "Not Found",
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Search for a Person</h1>
        <input
          onChange={this.handleInputChange}
          type="text"
          placeholder="Find your person"
        />
        <button onClick={this.handleClick}>Submit</button>
        {this.state.name ? (
          <>
            <div> Name:{this.state.name}</div>
            <div>Age:{this.state.age}</div>
            <div>Gender:{this.state.gender}</div>
          </>
        ) : <><br/><div>Not Found</div></>}
      </div>
    );
  }
}
