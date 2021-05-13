import React, { Component } from "react";
import axios from "axios";

export default class People extends Component {
  constructor() {
    super();
    this.state = {
      searchPeople: "",
      currentPeople: {},
      currentName: "",
      isUndefined: false,
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
        "https://ghibliapi.herokuapp.com/people"
      );
      //console.log(data);
      const person = data.find((element) => element.name === searchPeople);
      console.log(person);
      if (person === undefined) {
        this.setState({
          searchPeople: "",
          currentPeople: {},
          currentName: "",
          isUndefined: true,
        });
        console.log("person undefined")
      }
      this.setState({
        searchPeople: "",
        currentPeople: person,
        currentName: person.name,
        isUndefined: false,
      });
      console.log("person defined")
    } catch (e) {
      this.setState({
        searchPeople: "",
        currentPeople: {},
        currentName: "",
      
      });
      console.log("catch error")
    }
    console.log(this.state.undefined)
  };
  render() {
    const { searchPeople, currentPeople, currentName, isUndefined } = this.state;
    return (
      <>
        <div>
          <h1>Search for a Person</h1>

          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              value={searchPeople}
              type="text"
              name=""
              id=""
              placeholder="Find Your Person"
            />
            <button>Submit</button>
          </form>
        </div>

        {isUndefined ? (
          <h1>Not Found</h1>
        ) : currentName ? (
          <div>
            <p>Name: {currentPeople.name}</p>
            <p>Age: {currentPeople.age}</p>
            <p>Gender: {currentPeople.gender}</p>
          </div>
        ) : null}
      </>
    );
  }
}
