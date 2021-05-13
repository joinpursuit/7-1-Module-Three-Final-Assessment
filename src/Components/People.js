import React, { Component } from "react";

export default class People extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      
      person:{}
    };
  }
  handleChange=()=>{}
  getPeople=()=>{}
  render() {
    const { input } = this.state;
    return (
      <div>
        <h1 style={{ color: "ivory" }}>Search for a Person</h1>
        <form action="">
        <input type="text" placeholder="Find Your Person" onChange={this.handleChange}/>
        <button>Submit</button>
        </form>

        <h3 style={{ color: "ivory" }}>Name: </h3>
        <h3 style={{ color: "ivory" }}>Age: </h3>
        <h3 style={{ color: "ivory" }}>Gender: </h3>
      </div>
    );
  }
}
