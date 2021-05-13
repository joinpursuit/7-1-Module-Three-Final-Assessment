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

  handleChange = async (event) => {
    this.setState({
      selectedValue: event.target.value,
    });

    const { data } = await axios.get(
      `https://ghibliapi.herokuapp.com/films/${event.target.value}`
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
          {movie.title}
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
        <h3>{currentMovie.title}</h3>
        <h3>{currentMovie.release_date}</h3>
        <h3>{currentMovie.description}</h3>
      </div>
    );
  }
}

export default Movies;