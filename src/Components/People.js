import React, { Component } from "react";
import axios from "axios";

 class People extends Component {
  constructor() {
    super();
    this.state = {
      searchPeople: "",
      currentPeople: {},
      isError: false,
      savedName: "",
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
    
      const person = data.find((element) => element.name === searchPeople);
    
      if (person === undefined) {
        this.setState({
          searchPeople: "",
          currentPeople: {},
          isError: true,
          savedName: "",
        });
        
      }
      this.setState({
        searchPeople: "",
        currentPeople: person,
        isError: false,
        savedName: person.name,
      });
    
    } catch (e) {
      this.setState({
        searchPeople: "",
        currentPeople: {},
        savedName: "",
      
      });
      console.log("error")
    }
    
  };
  render() {
    const { searchPeople, currentPeople, savedName, isError } = this.state;
    return (
      <div>
        <div>
          <h1>Search for a Person</h1>

          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              value={searchPeople}
              type="text"
              placeholder="Find Your Person"
            />
            <button>Submit</button>
          </form>
        </div>

        {isError ? (<h1>Not Found</h1>) : savedName ? (
          <div>
            <p>Name: {currentPeople.name}</p>
            <p>Age: {currentPeople.age}</p>
            <p>Gender: {currentPeople.gender}</p>
          </div>
        ) : null}

        {/* {isError ? (<h1>Not Found</h1>) : null } */}
      </div>
    );
  }
}

export default People