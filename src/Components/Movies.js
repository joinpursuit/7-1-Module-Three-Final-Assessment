import React, { Component } from "react";
import axios from "axios";

export default class Movies extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      selectedMovie: "",
      currentMovie: {},
    };
  }

  handleChange = async (event) => {
    this.setState({
      selectedMovie: event.target.value,
    });

    const { data } = await axios.get(
      `https://ghibliapi.herokuapp.com/films/${event.target.value}`,
    );

    this.setState({
      currentMovie: data,
    });
  };

  getMovies = async () => {
    const { data } = await axios.get("https://ghibliapi.herokuapp.com/films/");
    this.setState({
      movies: data,
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies, selectedMovie, currentMovie } = this.state;
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
          value={selectedMovie}
          name=""
          id=""
        >
          <option></option>
          {options}
        </select>
        <div>
          <h3>Title: {currentMovie.title}</h3>
          <h3>Release Date: {currentMovie.release_date}</h3>
          <h3>Description: {currentMovie.description}</h3>
        </div>
      </div>
    );
  }
}
