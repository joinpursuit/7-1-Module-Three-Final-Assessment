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
  //     async componentDidMount() {
  //         try {
  //             const { data } = await axios.get(
  //                 `https://ghibliapi.herokuapp.com/people`
  //             );
  //             const {name, age, gender} = data.map(person => {
  //                 console.log(person.name)
  //             })
  //         }
  //         catch(e) {
  //             console.error(e)
  //         }
  //   }
  handleClick = async () => {
    // try {
    //   const { data } = await axios.get(
    //     `https://ghibliapi.herokuapp.com/people`
    //   );
    //     data.map(person => {
    //         //build what appears between
    //         this.setState({
    //           name: person.name,
    //           age: person.age,
    //           gender: person.gender,
    //         });

    //     })
    try {
      const { data } = await axios.get(
        `https://ghibliapi.herokuapp.com/people`
      );
      const id = data.map((person) => {
          return person.id
          
      });
        console.log(id)
        
        
      
    } catch (e) {
      console.error(e);
      console.log(this.state.name);
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
        ) : null}
      </div>
    );
  }
}
