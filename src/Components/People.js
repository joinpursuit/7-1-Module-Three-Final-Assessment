import React, { Component } from "react";
import APICalls from "./APICalls";

class People extends Component {
  constructor() {
    super();
    this.state = {
        people : [],
        searchPerson: "",
        currentPerson: {},
        isError: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      searchPerson: e.target.value,
    });
  };


   componentDidMount(){
      APICalls.getPeople().then(response => {
          this.setState({
            people : response.data
          });
      })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { searchPerson, people } = this.state;


    for(let i=0; i < people.length; i++){
        if(searchPerson.toLowerCase() === people[i].name.toLowerCase()){
            this.setState({
                currentPerson: people[i],
                searchPerson: "",
                isError: false,
              });
            break;
        }else{
            this.setState({
                currentPerson: {},
                searchPerson: "",
                isError: true,
              });
        }
    }

  };

  render() {
    const { searchPerson, currentPerson, isError } = this.state;
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

        {currentPerson.name ? (
          <div>
            <h2>Name: {currentPerson.name}</h2>
            <h2>Age: {currentPerson.age}</h2>
            <h2>Gender: {currentPerson.gender}</h2>
          </div>
        ) : null}

        {isError ? <h2>Not Found!</h2> : null}
      </div>
    );
  }
}

export default People;
