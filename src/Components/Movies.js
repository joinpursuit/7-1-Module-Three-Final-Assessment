import React, { Component } from "react";
import axios from "axios";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedValue: "",
      currentMovie: {},
    };
  }

  handleChange = async (e) => {
    this.setState({
      selectedValue: e.target.value,
    });

    const { data } = await axios.get(
      `https://ghibliapi.herokuapp.com/films/${e.target.value}`
    );

    

    this.setState({
      currentMovie: data,
    });
  };

  getMovie = async () => {
    const { data } = await axios.get("https://ghibliapi.herokuapp.com/films/");
    
    this.setState({
      movies: data,
    });
  };

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { movies, selectedValue, currentMovie } = this.state;
    const options = movies.map((movie, i) => {
      return (
        <option key={i} value={movie.id}>
          {movies.title}
        </option>
      );
    });
    return (
      <div>
        <h1>Select a Movie</h1>
        <select 
        onChange={this.handleChange} 
        value={selectedValue}
        name=""
        id="">
          <option></option>
          {options}
        </select>
        <h2>Title : {currentMovie.title ? currentMovie.title : null}</h2>
        <h2>Release Date: {currentMovie.release_date}</h2>
        <h2> Description: {currentMovie.description}</h2>
      </div>
    );
  }
}

export default Movies;