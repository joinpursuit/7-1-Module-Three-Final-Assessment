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

  collectMovies = async () => {
    const { data } = await axios.get("https://ghibliapi.herokuapp.com/films/");

    this.setState({ movies: data });
  };

  componentDidMount() {
    this.collectMovies();
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
        <select onChange={this.handleChange} value={selectedValue}>
          <option></option>
          {options}
        </select>
        <h3>Movie release date: {currentMovie.release_date}</h3>
        <h3>Movie title: {currentMovie.title ? currentMovie.title : null}</h3>
        <p>{currentMovie.description}</p>
      </div>
    );
  }
}

export default Movies;
